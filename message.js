var plivo = require('plivo');
var p = plivo.RestAPI();

p.options.authId = "xxxxxx";
p.options.authToken = "xxxxxx";

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
