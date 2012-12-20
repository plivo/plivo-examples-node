var plivo = require('plivo');

var p = plivo.RestAPI();

p.options.authId = "xxxxxx";
p.options.authToken = "xxxxxx";

// Get all applications' details
p.get_applications({}, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

var params = {};

// Create new application
params = {
    'app_name': 'Gandalf the Gray',
    'answer_url' : 'http://example.com/answer_url',
    'answer_method' : 'POST',
    'hangup_url' : 'http://example.com/hangup_url',
    'hangup_method' : 'POST',
    'fallback_url' : 'http://example.com/fallback_url',
    'fallback_method' : 'POST',
};

p.create_application(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Create new application for subaccount
params.subaccount = 'xxxxxxxxxxxxxxxxxxxx';
p.create_application(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Modify application
params.app_id = 'xxxxxxxxxxxxxx';
params.app_name = 'Gandalf';
p.modify_application(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Delete application
p.delete_application({app_id: 'xxxxxxxxxxxxxx'}, function(status, response) {
    console.log(status);
});
