# care ![image](http://care-server.herokuapp.com/care/badge/grunt/wwf-japan/JPY.svg)

A simple way to add careware and donation support to your node.js modules.

## CLI User
### Install
```
$ npm install -g care
$ care

Usage: care [options]

Options:

  -h, --help     usage information
  -V, --version  version number
  -o, --login    get an access token
  -x, --logout   remove your access token
```

### Login
Firstly, you must create a business account on Paypal and an application which care will use to pay other accounts.
```
$ care --login
Obtaining access_token from PayPal.
? Your application client_id : blahblahblahblahblahblah
? Your application client_secret : ****************************

Success!
```

### Logout
```
$ care --logout
Remove your access_token from the local filesystem.
```

## Using Care
### Install
```
$ npm install --save care
```

### Usage
Just require the package passing the details of the account you wish to receive donations:
```js
var care = require('care');
var donation = care.init({
  name: "Target organization name to donate",
  description: "What kind of organizer?",
  email: "Target organization email to donate in PayPal",
});
donation.request();

```

## Example
Create a donate feature for your cli-app. For example, say you are creating a cli-app called `nyan`. You can create a `donate` feature like the following:
```
$ nyan donate
~ WWFジャパン ~

WWFは、人類が自然と調和して生きられる未来を目指し、
約100カ国で活動している環境保全団体です。

WWF ジャパンは、日本国内および日本が関係している国際的な問題に取り組みます。

Would you like to donate to this?

? Payment method: (Use arrow keys)
❯ PayPal
  Venmo

? Currency: (Use arrow keys)
❯ AUD
 JPY
 USD

? Amount: 100

? Donate 100 AUD ?: (Y/n)
```

Code example
```js
#!/usr/bin/env node
var argv = process.argv;
if (argv[2] !== 'donate') return;

var care = require('care');
var donation = care.init({
  name: "WWFジャパン",
  description: "WWFは、人類が自然と調和して生きられる未来を目指し、\n約100カ国で活動している環境保全団体です。\n\nWWF ジャパンは、日本国内および日本が関係している国際的な問題に取り組みます。",
  email: 'wwf-japan@example.com',
});

donation.request();
```
