var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Machine Detection URL example

app.all('/machine_detection/', function(request, response) {
    
    var from_number = request.param('From'); // The From number which is used to make the call.
    var machine = request.param('Machine'); // This parameter will be true if a machine has been detected on the call.
    var to_number = request.param('To'); // The number which is being called.
    var call_uuid = request.param('CallUUID'); // The ID of the call.
    var events = request.param('Event');// The event of the notification. This parameter will always have the value MachineDetection.
    var call_status = request.param('CallStatus'); // The status of the call. This will hold the value of in-progress.

    console.log ('From :' + from_number + ' To : ' + to_number + ' Machine : ' + machine + ' Call UUID : ' + call_uuid + ' Event : ' + events + ' Call Status : ' + call_status);

});

// As soon as the voicemail finishes speaking, and there is a silence for minSilence milliseconds, 
// the next element in the XML is processed, without waiting for the whole period of length seconds to pass

app.all('/detect/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'length' : "1000", // Time to wait in seconds
        'silence' : 'true', // When silence is set to true, if no voice or sound is detected for minSilence milliseconds, end the wait and continue to the next element in the XML immediately
        'minSilence' : '3000' // Only used when silence is set to true. The minimum length in milliseconds of silence that needs to be present to qualify as silence
    };
    r.addWait(params);
    r.addSpeak("Hello Voicemail!");
    console.log (r.toXML());

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

From : 2222222222 
To : 1111111111 
Machine : true 
Call UUID : 45704ba2-959f-11e4-802f-e9b058eeb9e5 
Event : MachineDetection 
Call Status : in-progress

<Response>
    <Wait length="1000" silence="true" minSilence="3000"/>
    <Speak>Hello Voicemail!</Speak>
</Response>
*/