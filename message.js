var plivo = require('plivo');
var p = plivo.RestAPI(require('./config'));

var params = {
    'src': 'xxxxxxxxxx', // Caller Id
    'dst' : 'xxxxxxxxxx', // User Number to Call
    'text' : "Hi, message from Plivo",
    'type' : "sms",
};

p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
