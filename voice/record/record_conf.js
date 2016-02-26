var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/response/conference/', function(request, response) {    
    // Generates a Conference XML
    var r = plivo.Response();
    r.addSpeak("You will now be placed into a demo conference.");
    var params = {
        'enterSound' : "beep:1", // Used to play a sound when a member enters the conference
        'callbackUrl' : "https://intense-brook-8241.herokuapp.com/response/conf_callback/", // If specified, information is sent back to this URL
        'callbackMethod' : "GET" // Method used to notify callbackUrl
    };
    var conference_name = "demo"; // Conference Room name
    r.addConference(conference_name, params);    
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

// Record API is called in the callback URL to record the conference
app.all('/response/conf_callback/', function(request, response) {
    var conf_name = request.param('ConferenceName');    
    var events = request.param('Event');
    var r = plivo.Response();
    // The recording starts when the user enters the conference room 
    if (events == "ConferenceEnter"){
        var auth_id = "Your AUTH_ID";
        var auth_token = "Your AUTH_TOKEN";
        var p = plivo.RestAPI(auth_id,auth_token);
        var params = {
            'conference_name' : conf_name
        };
        p.record_conference(params, function (status, response) {
            console.log('Status: ', status);
            console.log('API Response:\n', response);
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
    <Speak>
        You will now be placed into a demo conference. This is brought to you by Plivo. To know more visit us at plivo.com
    </Speak>
    <Conference callbackMethod="GET" callbackUrl="https://intense-brook-8241.herokuapp.com/conf_callback" enterSound="beep=>1">demo</Conference>
</Response>
Status:  201
API Response:
 { api_id: '37155fe-bc10-11e4-ac1f-22000ac51de6', 
    url: 'https://s3.amazonaws.com/recordings_2013/c37e5efc-bc12-11e4-81a4-0026b93d8e7c.mp3',
    recording_id: 'c37e5efc-bc10-11e4-81a4-0026b93d8e7c'
    message: 'conference recording started', }

*/