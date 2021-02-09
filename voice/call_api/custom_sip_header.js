var plivo = require('plivo');

(function main() {
    'use strict';
    
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");
    
    client.calls.create(
        "+14151234567", // The phone number to be used as the caller id
        "+919900383513",  // The phone numer to which the all has to be placed
        "http://s3.amazonaws.com/static.plivo.com/answer.xml", // The URL invoked by Plivo when the outbound call is answered
        {
            answerMethod: "GET", // The method used to call the answer_url
            sip_headers:"Test=Sample" // List of SIP headers in the form of 'key=value' pairs, separated by commas.
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();

/* 
Sample Output

{
  apiId: '72d85bfb-5c80-11eb-ab4e-0242ac110005',
  message: 'call fired',
  requestUuid: '6d84e881-d9b5-4a31-9711-ac23be45df5f' 
}

The SIP header can be seen as a query parameter in the answer_url
path="/speak/?Direction=outbound&From=1111111111&ALegUUID=37d71724-31c5-11e5-bc2e-091a0ac416fa&BillRate=0.03570&
To=sip%3Aabcd150105094929%40phone.plivo.com&X-PH-Test=Sample&CallUUID=37d71724-31c5-11e5-bc2e-091a0ac416fa&
ALegRequestUUID=3c32ed0f-83f7-4835-b652-15683261d02f&RequestUUID=3c32ed0f-83f7-4835-b652-15683261d02f&
CallStatus=in-progress&Event=StartApp" host=intense-brook-8241.herokuapp.com request_id=1494af20-b03d-4275-b7fc-40fb93ff5f61 
fwd="54.193.253.60" dyno=web.1 connect=1ms service=20ms status=200 bytes=240
*/
