var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// When the call is answered, a text is played which prompts the user to press 1 to transfer the call.
// Once the digit is pressed, the transfer API request is made and the call is transfered to another number.

app.all('/transfer_api/', function(request, resp) {

    var response = plivo.Response();

    var params = {
        'action': "https://www.foo.com/transfer_action/",
        'method': "GET",
        'timeout': "7",
        'numDigits': "1",
        'retries': "1",
        'redirect': "false"
    }
    var get_digits = response.addGetDigits(params);

    var input_received_speak = "Press 1 to transfer the call";
    get_digits.addSpeak(input_received_speak);

    var input_not_received_speak = "Input not received. Thank you";
    response.addSpeak(input_not_received_speak);

    console.log(response.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// The Transfer API is invoked by the Get Digits action URL

app.all('/transfer_action/', function(request, response) {


    var digit = request.params('Digits');
    var call_uuid = request.params('CallUUID');
    console.log("Call UUID : " + call_uuid);
    console.log("Digit pressed : " + digit);

    var client = new plivo.Client();
    if (digit == "1") {
        client.calls.transfer(
            call_uuid, // call uuid
            {
                legs: "aleg",
                alegUrl: "http://aleg.url",
            },
        ).then(function(response) {
            console.log(response);
        }, function(err) {
            console.error(err);
        });
    } else {
        console.log("Wrong Input");
    }

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <GetDigits action="http://www.foo.com/transfer_action/" method="GET" numDigits="1" redirect="false" retries="1" timeout="7">
        <Speak>Press 1 to transfer this call</Speak>
    </GetDigits>
</Response>

Call UUID is : e66aa1a0-9587-11e4-9d37-c15e0b562efe 
Digit pressed is : 1

(202, {
    u'call_uuids': [
        u'e66aa1a0-9587-11e4-9d37-c15e0b562efe'
    ], 
        u'message': u'transfer executed', 
        u'api_id': u'eb8c80ae-9587-11e4-b423-22000ac8a2f8'
    }
)
<Response>
    <Speak>Connecting your call..</Speak>
    <Dial>
        <Number>1111111111</Number>
    </Dial>
</Response>

*/
