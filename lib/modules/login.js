var fs = require('fs');
var https = require('https');
var inquirer = require('inquirer');
var paypal = require('paypal-rest-sdk');
var pkg = require('../../package.json');
var ua = pkg.name + '#' + pkg.version;
var questions = [{
  type: "input",
  name: "client_id",
  message: "Your client_id in PayPal:"
}, {
  type: "password",
  name: "client_secret",
  message: "Your client_secret in PayPal:"
}, {
  type: "password",
  name: "passphrase",
  message: "Enter passphrase (empty for no passphrase):"
}];

var get_token = function (client_id, client_secret) {
  var sender_batch_id = Math.random().toString(36).substring(9);
  paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': client_id,
    'client_secret': client_secret
  });
  paypal.generateToken(function (err, token) {
    if (err) throw err;
    var token_persist = paypal.getTokenPersist();
    fs.writeFileSync(__dirname + '/../../.client_id', client_id);

    fs.writeFileSync(__dirname + '/../../.token_persist', JSON.stringify(token_persist));
    console.log("Success!");
  });
};

module.exports = function () {
  console.log('Obtaining access_token from PayPal.');
  inquirer.prompt(questions, function(credentials) {
    get_token(
      credentials.client_id,
      credentials.client_secret
    );
  });
};
