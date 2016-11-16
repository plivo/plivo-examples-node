var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'src': '1111111111', // Sender's phone number with country code
    'dst' : '2222222222', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo", // Your SMS Text Message - English
    //'text' : "こんにちは、元気ですか？" // Your SMS Text Message - Japanese
    //'text' : "Ce est texte généré aléatoirement" // Your SMS Text Message - French
    'url' : "https://intense-brook-8241.herokuapp.com/report/", // The URL to which with the status of the message is sent
    'method' : "GET" // The method used to call the url
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

Message UUID:
 [ '138ee55f-9efb-4fc3-8ad7-4d71219bf56c' ]
Api ID:
 b91b8736-134b-11e5-b0d7-22000ac520cd
*/
