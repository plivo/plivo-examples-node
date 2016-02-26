var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'to': '2222222222<3333333333', // The phone numer to which the all has to be placed separated by "<" delimiter
    'from' : '1111111111', // The phone number to be used as the caller id
    'answer_url' : "https://intense-brook-8241.herokuapp.com/conference/", // The URL invoked by Plivo when the outbound call is answered
    'answer_method' : "GET", // The method used to call the answer_url
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

*/
