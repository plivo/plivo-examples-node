var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'to': '2222222222', // The phone numer to which the all has to be placed
    'from' : '1111111111', // The phone number to be used as the caller id
    'answer_url' : "https://intense-brook-8241.herokuapp.com/speak/", // The URL invoked by Plivo when the outbound call is answered
    'answer_method' : "GET", // The method used to call the answer_url
    // Example for Asynchrnous request
    // 'callback_url' : "https://intense-brook-8241.herokuapp.com/callback/", // The URL notified by the API response is available and to which the response is sent.
    // 'callback_method' : "GET" // The method used to notify the callback_url.

};

// Prints the complete response
p.make_call(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/* 
Sample Output

Status:  201
API Response:
 { api_id: 'f14cbe2a-3134-11e5-a541-22000afa85ca',
  message: 'call fired',
  request_uuid: 'ea90fbb2-b360-4b22-9ab0-0bef9a8e684b' }

Asynchronous Request

Status:  200
API Response:
 { api_id: '87ccb6a6-3136-11e5-9250-22000ac88fb7',
  message: 'async api spawned' }

*/
