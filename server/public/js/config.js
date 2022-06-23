const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'dvvcjmnik',
  api_key: '787891171353953',
  api_secret: 'hjrVRJdmFVq9zesOGVhOwQojnYM',
  secure: true
});

exports.myconfig = myconfig;
