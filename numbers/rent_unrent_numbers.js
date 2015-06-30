var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Search for new number
var params = { 
    'country_iso': 'US', // The ISO code A2 of the country
    'type' : 'local', // The type of number you are looking for. The possible number types are local, national and tollfree.
    'pattern' : '210', // Represents the pattern of the number to be searched. 
    'region' : 'Texas' // This filter is only applicable when the number_type is local. Region based filtering can be performed.
};

p.search_phone_numbers(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: '4dffb7f6-6062-11e5-9059-22000ac51d70',
  meta: 
   { limit: 20,
     next: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/?limit=20&country_iso=US&pattern=210&region=Texas&offset=20&type=local',
     offset: 0,
     previous: null,
     total_count: 677 },
  objects: 
   [ { country: 'UNITED STATES',
       lata: 566,
       monthly_rental_rate: '0.80000',
       number: '12106706640',
       prefix: '210',
       rate_center: 'SANANTONIO',
       region: 'Texas, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/12106706640/',
       restriction: null,
       restriction_text: null,
       setup_rate: '0.00000',
       sms_enabled: true,
       sms_rate: '0.00000',
       type: 'fixed',
       voice_enabled: true,
       voice_rate: '0.00850' },
     { country: 'UNITED STATES',
       lata: 566,
       monthly_rental_rate: '0.80000',
       number: '12106706641',
       prefix: '210',
       rate_center: 'SANANTONIO',
       region: 'Texas, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/12106706641/',
       restriction: null,
       restriction_text: null,
       setup_rate: '0.00000',
       sms_enabled: true,
       sms_rate: '0.00000',
       type: 'fixed',
       voice_enabled: true,
       voice_rate: '0.00850' } ] }
*/

// Buy a phone number
var params = { 
    'number' : '12106706640' // The phone number
};

p.buy_phone_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  201
API Response:
 { api_id: 'b952e9ba-6062-11e5-9059-22000ac51d70',
  message: 'created',
  numbers: [ { number: '12106706640', status: 'Success' } ],
  status: 'fulfilled' }
*/

// Modify alias of a number
var params = { 
    'number' : '12106706640', // Number that has to be modified
    'alias' : 'testing' // The textual name given to the number
};

p.edit_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: '0e0790fa-6063-11e5-9059-22000ac51d70',
  message: 'changed' }
*/

// Modify application linked to a number
var params = { 
    'number' : '12106706640', // Number that has to be modified
    'app_id' : '16638156474000802' // The application id of the application that is to be linked
};

p.edit_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: 'e008cf6a-6063-11e5-9968-22000abfb1f6',
  message: 'changed' }
*/

// Unrent a number
var params = { 
    'number' : '12106706640', // Number that has to be unrented
};

p.unrent_number(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  204
*/