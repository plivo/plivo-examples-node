var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Link an application to a number
var params = { 
    'number' : '12106706640', // Number that has to be linked to an application
    'app_id' : '16638156474000802' // Application ID that has to be linked
};

p.link_application_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: 'e9c0a382-6065-11e5-9968-22000abfb1f6',
  message: 'changed' }
*/

// Unlink an application from an number
var params = { 
    'number' : '12106706640' // Number that has to be unlikned to an application
};

p.unlink_application_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: 'f54b0012-6065-11e5-9421-22000ac55bd1',
  message: 'changed' }
*/