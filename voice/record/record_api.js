var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'call_uuid' : "xxxxxxxxxxx", // ID of the call
    'time_limit': '40', // Max recording duration in seconds
    'callback_url' : "https://intense-brook-8241.herokuapp.com/save_record_url/", // The URL invoked by the API when the recording ends
    'callback_method' : "GET", // The method which is used to invoke the callback_url
    'transcriptionType' : 'auto', // The type of transcription required
    'transcriptionUrl' : "https://intense-brook-8241.herokuapp.com/transcription/", // The URL where the transcription while be sent from Plivo
    'transcriptionMethod' : 'GET' // The method used to invoke transcriptionUrl 

};

// Prints the complete response
p.record(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// To stop recording a call
var params = {
  'call_uuid' : "xxxxxxxxxxx", // ID of the call
}

p.stop_record(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// To record a conference call
var params = {
  'conference_name' : "demo", // The conference name
  'callback_url' : "https://intense-brook-8241.herokuapp.com/save_record_url/", // The URL invoked by the API when the recording ends  
  'callback_method' : "GET" // The method which is used to invoke the callback_url
}

p.record_conference(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// To stop recording a conference call
var params = {
    'conference_name' : "demo" // The conference name
}

p.stop_record_conference(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
