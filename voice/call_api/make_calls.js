var plivo = require('plivo');

(function main() {
    'use strict';

    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    client.calls.create(
        "+14151234567", // The phone number to be used as the caller id
        "+15671234567", // The phone numer to which the all has to be placed
        "http://s3.amazonaws.com/static.plivo.com/answer.xml", // The URL invoked by Plivo when the outbound call is answered
        {
            answerMethod: "GET", // The method used to call the answer_url
            callbackUrl: "https://intense-brook-8241.herokuapp.com/callback/", // The URL notified by the API response is available and to which the response is sent.
            callbackMethod: "GET" // The method used to notify the callback_url.
        },
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();


/* 
Sample Output

{
  apiId: '4b08ceef-5c80-11eb-b94b-0242ac110004',
  message: 'calls fired',
  requestUuid:'922e6f63-0130-40e2-98d4-9156454a2e62'}

Asynchronous Request

Status:  200
{ 
  apiId: '87ccb6a6-3136-11e5-9250-22000ac88fb7',
  message: 'async api spawned' 
}
*/