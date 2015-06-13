var program = require('commander');
var care = require('./');
var pkg = require('../package.json');

program
  .version(pkg.version)
  .option('-o, --login', 'get your access token')
  .option('-x, --logout', 'remove your access token')
  .parse(process.argv);

if (program.login) return care.login();
if (program.logout) return care.logout();
program.help();
