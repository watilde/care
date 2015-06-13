# care
Easy to make your software careware by require once

## CLI User
### Install
```
$ npm install -g care
$ care

Usage: care [options]

Options:

  -h, --help     output usage information
  -V, --version  output the version number
  -o, --login    get your access token
  -x, --logout   remove your access token
```

### Login
Currently you need to get business account and create an application for getting access_token
```
$ care --login
Obtaining access_token from PayPal.
? Your client_id in PayPal: blahblahblahblahblahblah
? Your client_secret in PayPal: ****************************

Success!
```

### Logout
```
$ care --logout
Remove your access_token from local.
```

## Development to use
### Install
```
$ npm install --save care
```

### Usage
Just require once, it's sooo easy:
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
Create a donate feature in your cli-app. In this case, you are cli-app called `nyan` developer. Your goal is  create a `donate` feature like the following:
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
