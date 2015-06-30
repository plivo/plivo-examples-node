var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'src': 'TEST', // Alphanumeric sender ID
    'dst' : '2222222222', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo" // Your SMS Text Message - English
};

// Prints the complete response
p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/* 
Sample Output

Status:  202
API Response:
 { api_id: 'b91b8736-134b-11e5-b0d7-22000ac520cd',
  message: 'message(s) queued',
  message_uuid: [ '138ee55f-9efb-4fc3-8ad7-4d71219bf56c' ] }
*/