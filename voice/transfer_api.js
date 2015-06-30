var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// When the call is answered, a text is played which prompts the user to press 1 to transfer the call.
// Once the digit is pressed, the transfer API request is made and the call is transfered to another number.

app.all('/transfer_api/', function(request, response) {
    var r = plivo.Response();

    var params_getdigits = {
        'action': "https://intense-brook-8241.herokuapp.com/transfer_action/", 
        'method':"GET",
        'timeout': "7",
        'numDigits': "1",
        'retries': "1",
        'redirect': "false"
    }

    var getdigits = r.addGetDigits(params_getdigits);
    getdigits.addSpeak("Press 1 to transfer this call");
    r.add(getdigits);

    params_wait = {
        'length' : "10"
    };  
    r.addWait(params_wait);

    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

// The Transfer API is invoked by the Get Digits action URL

app.all('/transfer_action/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'timeout' : "20", 
        'action':"https://intense-brook-8241.herokuapp.com/dial_status/" 
    }

    var digit = request.param('Digits');
    var call_uuid = request.param('CallUUID');
    console.log ("Call UUID : " + call_uuid);
    console.log ("Digit pressed : " + digit);

    var auth_id = "Your AUTH_ID";
    var auth_token = "Your AUTH_TOKEN";

    var p = plivo.RestAPI(auth_id,auth_token);

    if (digit == "1"){
        params = {
            'call_uuid' : call_uuid,
            'aleg_url' : "https://intense-brook-8241.herokuapp.com/connect/",
            'aleg_method' : "GET"
        }
        p.transfer_call(params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
        });
    }else {
        console.log ("Wrong Input");
    }

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <GetDigits action="http://morning-ocean-4669.herokuapp.com/transfer_action/" method="GET" numDigits="1" redirect="false" retries="1" timeout="7">
        <Speak>Press 1 to transfer this call</Speak>
    </GetDigits>
    <Wait length="10" />
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
