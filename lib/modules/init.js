var fs = require('fs');
var inquirer = require('inquirer');
var _ = require('lodash');
var paypal = require('paypal-rest-sdk');

module.exports = function (options) {
  'use strict';
  var questions = [{
    type: "input",
    name: "currency",
    message: "Currency:",
    default: _.isEmpty(options.defaultCurrency) ? "JPY" : options.defaultCurrency
  }, {
    type: "input",
    name: "amount",
    message: "Amount:",
    default: _.isNumber(options.defaultAmount) ? options.defaultAmount : 1000
  }];
  return {
    request: function() {
      console.log(options.name)
      console.log(options.description)
      inquirer.prompt(questions, function(details) {
        var client_id = fs.readFileSync(__dirname + '/../../.client_id', 'utf8');
        var token_persist = fs.readFileSync(__dirname + '/../../.token_persist', 'utf8');
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
                "value": 100,
                "currency": "JPY"
              },
              "receiver": options.email,
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
