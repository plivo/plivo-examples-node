var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Get details of all numbers
var params = { 
    'limit' : '10',
    'offset' : '0'
};

p.get_numbers(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: 'fd1256f2-6064-11e5-8327-22000ac431f8',
  meta: 
   { limit: 10,
     next: null,
     offset: 0,
     previous: null,
     total_count: 4 },
  objects: 
   [ { active: true,
       added_on: '2014-10-28',
       alias: 'Testing API 3',
       application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16634980296193768/',
       carrier: 'Plivo',
       monthly_rental_rate: '0.80000',
       number: '18583650866',
       number_type: 'local',
       region: 'California, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Number/18583650866/',
       sms_enabled: true,
       sms_rate: '0.00000',
       sub_account: null,
       type: 'local',
       voice_enabled: true,
       voice_rate: '0.00850' },
     { active: true,
       added_on: '2015-09-21',
       alias: 'testing',
       application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16638156474000802/',
       carrier: 'Plivo',
       monthly_rental_rate: '0.80000',
       number: '12106706640',
       number_type: 'local',
       region: 'Texas, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Number/12106706640/',
       sms_enabled: true,
       sms_rate: '0.00000',
       sub_account: null,
       type: 'fixed',
       voice_enabled: true,
       voice_rate: '0.00850' } ] }
*/

// Get details of a single number
var params = { 
    'number' : '12106706640' // Phone number for which the details have to be retrieved
};

p.get_number_details(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { active: true,
  added_on: '2015-09-21',
  alias: 'testing',
  api_id: '2de6bebc-6065-11e5-8327-22000ac431f8',
  application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16638156474000802/',
  carrier: 'Plivo',
  monthly_rental_rate: '0.80000',
  number: '12106706640',
  number_type: 'local',
  region: 'Texas, UNITED STATES',
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Number/12106706640/',
  sms_enabled: true,
  sms_rate: '0.00000',
  sub_account: null,
  type: 'fixed',
  voice_enabled: true,
  voice_rate: '0.00850' }
*/