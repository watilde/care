var care = require('./lib/index.js');

var donation = care.init({
  name: "Grunt",
  description: "Your donation helps us continue Grunt development.",
  email: 'robert.gravina-buyer@gmail.com',
});

donation.request();
