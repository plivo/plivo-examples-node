var plivo = require('plivo');

var p = plivo.RestAPI();

p.options.authId = "xxxxxx";
p.options.authToken = "xxxxxx";

var params = {};

// Modify Account Details
params = {
    'name': 'Alice',
    'city': 'Wonderland',
    'address':'Rabbit hole',
}

p.modify_account(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Delete Sub Account
params = {
    subauth_id: 'xxxxxxxxxxxxxxxxxxx',
};

p.delete_subaccount(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
