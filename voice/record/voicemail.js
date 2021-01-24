var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/voicemail/', function(request, response) {
    // Generate a Record XML and ask the caller to leave
    // a message.

    // The recorded file will be sent to the 'action' URL
    var record_params = {
        'action': "https://intense-brook-8241.herokuapp.com/save_record_url/", // Submit the result of the record to this URL
        'method': "GET", // HTTP method to submit the action URL
        'maxLength': '30', // Maximum number of seconds to record 
        'transcriptionType': 'auto', // The type of transcription required
        'transcriptionUrl': "https://intense-brook-8241.herokuapp.com/transcription/", // The URL where the transcription while be sent from Plivo
        'transcriptionMethod': 'GET' // The method used to invoke transcriptionUrl
    }

    var r = plivo.Response();
    r.addSpeak("Leave your message after the tone")
    r.addRecord(record_params)
    console.log(r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// Action URL Example
app.all('/save_record_url/', function(request, response) {
    var record_url = request.params('RecordUrl');
    console.log('Record Url : ' + record_url);
});

// Transcription URL Example
app.all('/transcription/', function(request, response) {
    var transcription = request.params('transcription');
    console.log('Transcription is : ' + transcription);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Speak>Leave your message after the tone</Speak>
    <Record action="https://intense-brook-8241.herokuapp.com/record_action" maxLength="30" method="GET" transcriptionMethod="GET" transcriptionType="auto" transcriptionUrl="https://intense-brook-8241.herokuapp.com/transcription"/>
</Response>
Record URL : https://s3.amazonaws.com/recordings_2013/4cc6dafe-bc0c-11e4-9dc1-842b2b096c5d.mp3
Transcription is : Hello
*/