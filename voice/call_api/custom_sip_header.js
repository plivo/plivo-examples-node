var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'to': 'sip:abcd150105094929@phone.plivo.com', // The phone numer to which the all has to be placed
    'from' : '1111111111', // The phone number to be used as the caller id
    'answer_url' : "https://intense-brook-8241.herokuapp.com/speak/", // The URL invoked by Plivo when the outbound call is answered
    'answer_method' : "GET", // The method used to call the answer_url
    'sip_headers' : "Test=Sample" // List of SIP headers in the form of 'key=value' pairs, separated by commas.

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
 { api_id: '378c2ac0-31c5-11e5-ac94-22000afb84bc',
  message: 'call fired',
  request_uuid: '3c32ed0f-83f7-4835-b652-15683261d02f' }

The SIP header can be seen as a query parameter in the answer_url
path="/speak/?Direction=outbound&From=1111111111&ALegUUID=37d71724-31c5-11e5-bc2e-091a0ac416fa&BillRate=0.03570&
To=sip%3Aabcd150105094929%40phone.plivo.com&X-PH-Test=Sample&CallUUID=37d71724-31c5-11e5-bc2e-091a0ac416fa&
ALegRequestUUID=3c32ed0f-83f7-4835-b652-15683261d02f&RequestUUID=3c32ed0f-83f7-4835-b652-15683261d02f&
CallStatus=in-progress&Event=StartApp" host=intense-brook-8241.herokuapp.com request_id=1494af20-b03d-4275-b7fc-40fb93ff5f61 
fwd="54.193.253.60" dyno=web.1 connect=1ms service=20ms status=200 bytes=240

*/
