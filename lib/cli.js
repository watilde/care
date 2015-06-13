var program = require('commander');
var care = require('./');
var pkg = require('../package.json');

program
  .version(pkg.version)
  .option('-hi, --login', 'get your OAuth2 token')
  .option('-bye, --logout', 'remove your OAuth2 token')
  .parse(process.argv);

if (program.login) return care.login();
