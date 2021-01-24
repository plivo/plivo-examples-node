var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/record_api/', function(request, resp) {
    var getdigits_action_url = "https://intense-brook-8241.herokuapp.com/record_action/"
    var r = plivo.Response();
    var params = {
        'action': getdigits_action_url, // The URL to which the digits are sent
        'method': 'GET', // Submit to action URL using GET or POST
        'timeout': '7', // Time in seconds to wait to receive the first digit
        'numDigits': '1', // Maximum number of digits to be processed in the current operation
        'retries': '1', // Indicates the number of retries the user is allowed to input the digits
        'redirect': 'false' // Redirect to action URL if true
    }
    var getdigits = r.addGetDigits(params);
    getdigits.addSpeak("Press 1 to record this call");


    console.log(r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.all('/record_action/', function(request, response) {
    var digit = request.params('Digits');
    var call_uuid = request.params('CallUUID');
    console.log("Call UUID : " + call_uuid);
    console.log("Digit pressed : " + digit);


    if (digit == "1") {
        var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
        client.calls.record(
            call_uuid, // call uuid
        ).then(function(response) {
            console.log(response);
        }, function(err) {
            console.error(err);
        });
    } else {
        console.log("Wrong Input");
    }


    r.addSpeak('Congratulations! You did it!');
    console.log(r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <GetDigits action="https://intense-brook-8241.herokuapp.com/record_api_action" method="GET" numDigits="1" redirect="false" retries="1" timeout="7">
        <Speak>Press 1 to record this call</Speak>
    </GetDigits>
</Response>

Status:  201
API Response:
 { api_id: '16847e54-9594-11e4-b423-22000ac8a2f8', 
    url: 'https://s3.amazonaws.com/recordings_2013/67673232-9594-11e4-baad-842b2b17453e.mp3"',
    recording_id: '16963644-9594-11e4-baad-842b2b17453e'
    message: 'call recording started', }

The below XML will be exucted right after excuting the above API.
<Response>
    <Speak>Congratulations! You did it!</Speak>
</Response>
*/