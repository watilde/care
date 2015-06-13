var https = require('https');
var inquirer = require('inquirer');
var pkg = require('./pkg');
var ua = pkg.name + '#' + pkg.version;
var questions = [{
  type: "input",
  name: "username",
  message: "PayPal username:"
}, {
  type: "password",
  name: "password",
  message: "PayPal password:"
}];

module.exports = function () {
  console.log('Obtaining OAuth2 access_token from PayPal.');
  inquirer.prompt(questions, function(credentials) {
    console.log(credentials);
  });
};
