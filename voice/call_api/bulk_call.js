var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'to': '2222222222<3333333333', // The phone numer to which the all has to be placed
    'from' : '1111111111', // The phone number to be used as the caller id
    'answer_url' : "https://intense-brook-8241.herokuapp.com/speak/", // The URL invoked by Plivo when the outbound call is answered
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
 { api_id: '294b50e6-3137-11e5-bfa2-22000afaa73b',
  message: 'calls fired',
  request_uuid: 
   [ 'ce7b6a31-ebcb-419f-8863-862d79168fb7',
     '3e6fcedb-bf3d-45eb-bfbc-454b31b2d113' ] }

*/
