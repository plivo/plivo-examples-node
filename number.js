var plivo = require('plivo');
var p = plivo.RestAPI();

p.options.authId = "xxxxxx";
p.options.authToken = "xxxxxx";

var params = {};

// Get all numbers
p.get_numbers({}, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Get all numbers linked to a subaccount
params.subaccount = 'xxxxxxxxxxxxxxx';
p.get_numbers(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Get details of a number
params = {
    'number': 'xxxxxxxxxxx',
};

p.get_number(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Unrent a number
p.unrent_number(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Get available number group
params = {
    country_iso: 'US',
};

p.get_number_group(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Rent number(s)
params = {
    group_id: 'xxxxxxxxxxxxx',
    quantity: 2, // Optional
};

p.rent_from_number_group(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Link application to number
params = {
    app_id: 'xxxxxxxxxxxxxxxxxx',
    number: 'xxxxxxxxxxxxx'
}

p.link_application_number(params, function(status, response) {
    console.log(status, 'done');
});

// Unlink application from number
params = {
    number: 'xxxxxxxxxxx'
}
p.unlink_application_number(params, function(status, response) {
    console.log(status, 'done');
});
