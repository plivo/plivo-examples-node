var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Speak XML with the details of the text to play on the call.

app.all('/dial/', function(request, response) {


    var response = plivo.Response();

    var params = {
        'callerId': "+14151114444"
    };
    var dial = response.addDial(params);

    var first_number = "+14151112222";
    dial.addNumber(first_number);

    console.log(response.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/*
Sample Output
<Response>
    <Dial callerId="+14151114444">
        <Number>+14151112222</Number>
    </Dial>
</Response>
*/

// Set the caller ID using Call API

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
  requestUuid:'922e6f63-0130-40e2-98d4-9156454a2e62',
}
*/