var https = require('https');
var inquirer = require('inquirer');
module.exports = function () {
  var questions = [{
    type: "input",
    name: "username",
    message: "PayPal username:"
  }, {
    type: "password",
    name: "password",
    message: "PayPal password:"
  }];

  console.log('Obtaining OAuth2 access_token from PayPal.');
  inquirer.prompt(questions, function(credentials) {
    console.log(credentials);
  });
};
