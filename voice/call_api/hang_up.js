var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'call_uuid': 'defb0706-86a6-11e4-b303-498d468c930b' // UUID of the call to be hung up
};

// Prints the complete response
p.hangup_call(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/* 
Sample successful output
Status:  204
API Response:

Sample unsuccesful output
Status:  404
API Response:
 {  "api_id": "835fcb44-31cc-11e5-a541-22000afa85ca",
    "error": "call not found" }

*/
