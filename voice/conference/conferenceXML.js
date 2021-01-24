var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/conference/', function(request, response) {
    // Generates a Conference XML

    var r = plivo.Response();
    r.addSpeak("You will now be placed into a demo conference. This is brought to you by Plivo. To know more visit us at plivo.com");
    var params = {
        'enterSound': "beep:2", // Used to play a sound when a member enters the conference
        'record': "true", // Option to record the call
        'action': "https://intense-brook-8241.herokuapp.com/conf_action/", // URL to which the API can send back parameters
        'method': "GET", // method to invoke the action Url
        'callbackUrl': "https://intense-brook-8241.herokuapp.com/conf_callback/", // If specified, information is sent back to this URL
        'callbackMethod': "GET", // Method used to notify callbackUrl
        // For moderated conference
        'startConferenceOnEnter': "true", // When a member joins the conference with this attribute set to true, the conference is started.
        // If a member joins a conference that has not yet started, with this attribute value set to false, 
        // the member is muted and hears background music until another member joins the conference
        'endConferenceOnExit': "true" // If a member with this attribute set to true leaves the conference, the conference ends and all 
        // other members are automatically removed from the conference. 
    };

    var conference_name = "demo"; // Conference Room name
    r.addConference(conference_name, params);
    console.log(r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.all('/conf_action/', function(request, response) {
    var conf_name = request.params('ConferenceName');
    var conf_uuid = request.params('ConferenceUUID');
    var conf_mem_id = request.params('ConferenceMemberID');
    var record_url = request.params('RecordUrl');
    var record_id = request.params('RecordingID');

    console.log('Conference Name : ' + conf_name + ' Conference UUID  : ' + conf_uuid + ' Conference Member ID : ' + conf_mem_id + ' Record Url : ' +
        record_url + ' Record ID : ' + record_id);
});

app.all('/conf_callback/', function(request, response) {
    var conf_action = request.params('ConferenceAction')
    var conf_name = request.params('ConferenceName');
    var conf_uuid = request.params('ConferenceUUID');
    var conf_mem_id = request.params('ConferenceMemberID');
    var call_uuid = request.params('CallUUID')
    var record_url = request.params('RecordUrl');
    var record_id = request.params('RecordingID');

    console.log('Conference Action : ' + conf_action + ' Conference Name : ' + conf_name + ' Conference UUID  : ' + conf_uuid +
        ' Conference Member ID : ' + conf_mem_id + ' Call UUID : ' + call_uuid + ' Record Url : ' + record_url + ' Record ID : ' + record_id);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Speak>You will now be placed into a demo conference. This is brought to you by Plivo. To know more visit us at plivo.com</Speak>
<Conference action="https://intense-brook-8241.herokuapp.com/response/conf_action" callbackMethod="GET" 
callbackUrl="https://intense-brook-8241.herokuapp.com/response/conf_callback" enterSound="beep:2" method="GET" record="true">demo</Conference>
</Response>    
Conference Action : record, Conference Name : demo, Conference UUID : 2cb2b614-b042-11e4-8bc6-1da51d64770b, Member ID : 83858, Call UUID : 269c233c-b042-11e4-8b74-1da51d64770b , 
Record URL : http://s3.amazonaws.com/recordings_2013/2c8a5390-b042-11e4-a1f8-0026b958a9e2.mp3, Record ID : 2c8a5390-b042-11e4-a1f8-0026b958a9e   
Conference Name : demo, Conference UUID : 2cb2b614-b042-11e4-8bc6-1da51d64770b, Member ID : 83858, 
Record URL : http://s3.amazonaws.com/recordings_2013/2c8a5390-b042-11e4-a1f8-0026b958a9e2.mp3, Record ID : 2c8a5390-b042-11e4-a1f8-0026b958a9e2
*/