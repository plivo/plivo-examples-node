var plivo = require('plivo');

(function main() {
    'use strict';

    // As the auth_id and auth_token are unspecified, Plivo will fetch them from the PLIVO_AUTH_ID and PLIVO_AUTH_TOKEN environment variables.
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    var params = {
        'call_uuid': "xxxxxxxxxxx", // ID of the call
        'time_limit': '40', // Max recording duration in seconds
        'callback_url': "https://intense-brook-8241.herokuapp.com/save_record_url/", // The URL invoked by the API when the recording ends
        'callback_method': "GET", // The method which is used to invoke the callback_url
        'transcriptionType': 'auto', // The type of transcription required
        'transcriptionUrl': "https://intense-brook-8241.herokuapp.com/transcription/", // The URL where the transcription while be sent from Plivo
        'transcriptionMethod': 'GET' // The method used to invoke transcriptionUrl 

    };

    // Prints the complete response
    client.calls.record(params, // call uuid
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });


    // To stop recording a call
    client.calls.stopRecording(
        "eba53b9e-8fbd-45c1-9444-696d2172fbc8", // call uuid
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });

    // Sampe Output
    // No Response


    // To record a conference call
    var params = {
        'conference_name': "demo", // The conference name
        'callback_url': "https://intense-brook-8241.herokuapp.com/save_record_url/", // The URL invoked by the API when the recording ends  
        'callback_method': "GET" // The method which is used to invoke the callback_url
    }

    client.conferences.record(params, // conference name
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });

    /*
    Sample Output
    {
    	"api_id": "2867b6e2-58c3-11e1-86da-adf28403fe48",
    	"message": "conference recording started",
    	"recording_id": "93bc7c6a-3b2b-11e3",
    	"url": "http://s3.amazonaws.com/recordings_2013/93bc7c6a-3b2b-11e3.mp3",
    }
    */

    // To stop recording a conference call
    client.conferences.stopRecording(
        "demo", // conference name
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();

/*
Sampe Output
No Response
*/