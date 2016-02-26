var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/answer_incoming/', function(request, response) {

    var record_params = {
        'action' : "https://intense-brook-8241.herokuapp.com/record_action/", // Submit the result of the record to this URL.
        'method' : 'GET', // Submit to action url using GET or POST
        'redirect' : 'false', // If false, don't redirect to action url, only request the url and continue to next element.
        'recordSession': 'true' // Record current call session in background 
    };

    var r = plivo.Response();
    r.addRecord(record_params);
    var wait_params = {
        'length' : '5' // Time to wait in seconds
    };
    r.addWait(wait_params);
    r.addSpeak('Connecting your call');

    var dial_params = {
        'callbackUrl' : 'https://intense-brook-8241.herokuapp.com/dial_outbound/', // URL that is notified by Plivo when one of the following events occur : 
                                                                                    // called party is bridged with caller, called party hangs up, caller has pressed any digit
        'callbackMethod' : 'GET' // Method used to notify callbackUrl.
    };

    var d = r.addDial(dial_params)
    d.addNumber('1111111111')

    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());
});

// The Callback URL of Dial will make a request to the Record API which will record only the B Leg
// Play API is invoked which will play a music only on the B Leg.

app.all('/dial_outbound/', function(request, response) {
    var events = request.param('Event');
    var call_uuid = request.param('DialBLegUUID');
    console.log ("Call UUID : " + call_uuid);
    console.log ("Event : " + events);

    var auth_id = "Your AUTH_ID";
    var auth_token = "Your AUTH_TOKEN";

    var p = plivo.RestAPI(auth_id,auth_token);

    if (events == "DialAnswer"){
        var params = {
            'call_uuid' : call_uuid, // ID of the call 
            'callbackUrl' : 'https://intense-brook-8241.herokuapp.com/record_callback/', // The URL invoked by the API when the recording ends.
            'callbackMethod': 'GET' // The method which is used to invoke the callback_url URL. Defaults to POST.
        };

        p.record(params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
        });

        var play_params = {
            'call_uuid' : call_uuid, // ID of the call
            'urls' : "https://s3.amazonaws.com/plivocloud/Trumpet.mp3" // A single URL or a list of comma separated URLs pointing to an mp3 or wav file. 
        };
        
        p.play(params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
        });

    }else {
        console.log ("Wrong Input");
    }
});

// The Callback URL of record api will return the B Leg record details.
app.all('/record_callback/', function(request, response) {
    var record_url = request.param('RecordUrl');    
    var record_duration = request.param('RecordingDuration');
    var record_id = request.param('RecordingID');

    console.log ('Record Url : ' + record_url + ' Recording Duration : ' + record_duration + ' Recording ID : ' + record_id);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Record action="https://intense-brook-8241.herokuapp.com/record_action" method="GET" recordSession="true" redirect="false"/>
    <Wait length="5"/>
    <Speak>Connecting your call</Speak>
    <Dial callbackMethod="GET" callbackUrl="https://intense-brook-8241.herokuapp.com/dial_outbound">
        <Number>919663489033</Number>
    </Dial>
</Response>

Record API
Status:  201
API Response:
 { api_id: 'e3403906-9585-11e4-b153-22000abcaa64',
  message: 'async api spawned', }

Play API
Status:  201
API Response:
 { api_id: 'e3791dca-9585-11e4-96e3-22000abcb9af',
  message: 'play started', }

Output of Record API Callback URL
Record URL : http://s3.amazonaws.com/recordings_2013/11112222-4444-11e4-a4c8-782bcb5bb8af.mp3, Recording Duration : 22, Recording ID : 693e61fd-8150-4091-a0f8-561d4a434288 
Output of Record XML Action URL
Record URL : http://s3.amazonaws.com/recordings_2013/55556666-7777-11e4-a4c8-782bcb5bb8af.mp3, Recording Duration : 27, Recording ID : daddbf04-9585-11e4-a4c8-782bcb5bb8af 

*/