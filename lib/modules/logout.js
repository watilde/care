module.exports = function () {
  'use strict';
  var file = __dirname + '/../../.token';
  require('child_process').exec('rm ' + file, function () {
    console.log('Remove your access_token from local.');
  });
};
