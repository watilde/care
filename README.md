# care
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
var care = require('care') {
  name: '',
  description: '',
  email: ''
};

var message = '';
message += care;
console.log(message);
```

## Example
Create a donate feature for your cli-app. For example, say you are creating a cli-app called `nyan`. You can create a `donate` feature like the following:
```
$ nyan donate
Organizer name: blahblah
Description: blahblahblah
Amount: | // you typed
```

Code example
```js
var argv = process.argv;
var care = require("care");
var opt = {
  name: "blahblah",
  description: "blahblahblah",
  email: 'blahblah'
};

if (argc[2] === 'donate') {
}
```
