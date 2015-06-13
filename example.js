#!/usr/bin/env node
var argv = process.argv;
if (argv[2] !== 'donate') return;

/* CODE EXAMPLE */

var care = require('./lib/index.js');

var donation = care.init({
  name: "WWFジャパン",
  description: "WWFは、人類が自然と調和して生きられる未来を目指し、\n約100カ国で活動している環境保全団体です。\n\nWWF ジャパンは、日本国内および日本が関係している国際的な問題に取り組みます。",
  email: 'wwf-japan@example.com',
});

donation.request();
