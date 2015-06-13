var https = require('https');
var inquirer = require('inquirer');
var pkg = require('../../package.json');
var ua = pkg.name + '#' + pkg.version;
var questions = [{
  type: "input",
  name: "client_token",
  message: "Your PayPal client_token:"
}, {
  type: "password",
  name: "client_secret",
  message: "Your PayPal client_secret:"
}];

module.exports = function () {
  console.log('Obtaining access_token from PayPal.');
  inquirer.prompt(questions, function(credentials) {
    console.log(credentials);
  });
};
