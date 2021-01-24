var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/record/', function(request, resp) {
    // Generate a Record XML and ask the caller to leave
    // a message.

    // The recorded file will be sent to the 'action' URL
    var record_params = {
        'action': "https://intense-brook-8241.herokuapp.com/record_action/", // Submit the result of the record to this URL
        'method': "GET", // HTTP method to submit the action URL
        'callbackUrl': "https://intense-brook-8241.herokuapp.com/record_callback/", // If set, this URL is fired in background when the recorded file is ready to be used.
        'callbackMethod': "GET" // Method used to notify the callbackUrl.
    }

    var r = plivo.Response();
    r.addRecord(record_params)
    console.log(r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// Action URL Example
app.all('/record_action/', function(request, response) {
    var record_url = request.params('RecordUrl');
    var record_duration = request.params('RecordingDuration');
    var record_id = request.params('RecordingID');

    console.log('Record Url : ' + record_url + ' Recording Duration : ' + record_duration + ' Recording ID : ' + record_id);
});

// Callback URL Example
app.all('/record_callback/', function(request, response) {
    var record_url = request.params('RecordUrl');
    var record_duration = request.params('RecordingDuration');
    var record_id = request.params('RecordingID');

    console.log('Record Url : ' + record_url + ' Recording Duration : ' + record_duration + ' Recording ID : ' + record_id);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
<Record action="https://intense-brook-8241.herokuapp.com/record_action" callbackMethod="GET" 
    callbackUrl="https://intense-brook-8241.herokuapp.com/record_callback" method="GET"/>
</Response>

Sample output for Action URL
Record URL : http://s3.amazonaws.com/recordings_2013/11111111-5555-6666-2222-999944421718.mp3, Recording Duration : 8, Recording ID : a34d252c-94b1-11e4-ab5e-842b2b021718
Sample output for Callback URL
Record URL : http://s3.amazonaws.com/recordings_2013/11111111-5555-6666-2222-999944421718.mp3, Recording Duration : 8, Recording ID : a34d252c-94b1-11e4-ab5e-842b2b021718
*/