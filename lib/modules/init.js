var fs = require('fs');
var inquirer = require('inquirer');
var opener = require('opener');
var _ = require('lodash');
var paypal = require('paypal-rest-sdk');

module.exports = function (options) {
  'use strict';
  var client_id = fs.readFileSync(
    __dirname + '/../../.client_id',
    'utf8'
  );
  var token_persist = fs.readFileSync(
    __dirname + '/../../.token_persist',
    'utf8'
  );
  var questions = [{
    type: "list",
    name: "payed_by",
    message: "Payed by:",
    choices: ["PayPal", "Venmo"]
  },{
    type: "list",
    name: "currency",
    message: "Currency:",
    choices: ["AUD", "JPY", "USD"]
  }, {
    type: "input",
    name: "amount",
    message: "Amount:",
    validate: function(input) {
      return input > 0;
    }
  }, {
    type: "confirm",
    name: "confirm",
    message: function (answer) {
      var message = '';
      message += 'Donate ';
      message += answer.amount;
      message += ' ';
      message += answer.currency;
      message += ' ?:';
      return message;
    },
    validate: function(input) {
      return !!input;
    }
  }];

  var header = " ~ " + options.name + " ~ \n";

  return {
    request: function() {
      console.log(header);
      console.log(options.description);
      console.log("\nWould you like to donate to this? \n")

      inquirer.prompt(questions, function(answer) {
        if (answer.payed_by === 'Venmo') {
          var url = 'https://venmo.com/';
          url += options.venmo.id;
          url += '?txn=pay&amount=';
          url += answer.amount;
          opener(url);
          return;
        }

        paypal.setToken(JSON.parse(token_persist));

        var sender_batch_id = Math.random().toString(36).substring(9);

        var create_payout_json = {
          "sender_batch_header": {
            "sender_batch_id": sender_batch_id,
            "email_subject": "You have a payment"
          },
          "items": [
            {
              "recipient_type": "EMAIL",
              "amount": {
                "value": answer.amount,
                "currency": answer.currency
              },
              "receiver": options.paypal.email,
              "note": "Thank you.",
              "sender_item_id": "item_3"
            }
          ]
        };

        var sync_mode = 'true';

        paypal.payout.create(create_payout_json, sync_mode, {
          "client_id": client_id
        }, function (error, payout) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
              if (payout.batch_header.batch_status == 'SUCCESS') {
                console.log("Thanks 👍");
              }
            }
        });
      });
    }
  }
};
