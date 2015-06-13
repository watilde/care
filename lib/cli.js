var program = require('commander');
var care = require('./');
var pkg = require('../package.json');

program
  .version(pkg.version)
  .option('-o, --login', 'get your OAuth2 token')
  .option('-x, --logout', 'remove your OAuth2 token')
  .parse(process.argv);

if (program.login) return care.login();
if (program.logout) return care.logout();
program.help();
