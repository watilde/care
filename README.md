# care
Easy to make your software careware using only one require
l
## Install
```
$ npm install --save care
```

## Usage
Just require, it's sooo easy:
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
