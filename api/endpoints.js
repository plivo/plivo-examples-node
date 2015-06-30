var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Create a new endpoint
var params = {
    'username': 'testuser', // The username for the endpoint to be created
    'password': 'test123', // The password for your endpoint username
    'alias': 'Test' // Alias for this endpoint
};
p.create_endpoint(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  201
API Response:
 { alias: 'Test',
  api_id: 'bd1afc54-604e-11e5-9421-22000ac55bd1',
  endpoint_id: '25138079994337',
  message: 'created',
  username: 'testuser150921105140' }
*/

// Modify an endpoint
var params = {
    'endpoint_id' : '25138079994337', // ID of the endpoint that has to be modified
    'alias' : 'New_test' // Values that have to be updated
};
p.modify_endpoint(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
SStatus:  202
API Response:
 { api_id: 'e0b42faa-604e-11e5-a78c-22000abfa4f6',
  message: 'changed' }
*/

// Get details of all endpoints
var params = {
    'limit' : '2', // The number of results per page
    'offset' : '0' // The number of value items by which the results should be offset
};
p.get_endpoints(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: 'ed8e8cca-604e-11e5-b9a5-22000afb8d0a',
  meta: 
   { limit: 2,
     next: '/v1/Account/XXXXXXXXXXXXXXXXX/Endpoint/?limit=2&offset=2',
     offset: 0,
     previous: null,
     total_count: 4 },
  objects: 
   [ { alias: 'New_test',
       application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
       endpoint_id: '25138079994337',
       password: 'cc03e747a6afbbcbf8be7668acfebee5',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Endpoint/25138079994337/',
       sip_registered: 'false',
       sip_uri: 'sip:testuser150921105140@phone.plivo.com',
       sub_account: null,
       username: 'testuser150921105140' },
     { alias: 'testing',
       application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
       endpoint_id: '35471010245134',
       password: 'cc03e747a6afbbcbf8be7668acfebee5',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Endpoint/35471010245134/',
       sip_registered: 'false',
       sip_uri: 'sip:testing150527123715@phone.plivo.com',
       sub_account: null,
       username: 'testing150527123715' } ] }743552@app.plivo.com',
       sub_account: null } ] }
*/

// Get details of a single endpoint
var params = {
    'endpoint_id': '25138079994337' // ID of the endpoint for which the details have to be retrieved
};
p.get_endpoint(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { alias: 'New_test',
  api_id: '1359f8d6-604f-11e5-990f-22000ac541f7',
  application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
  endpoint_id: '25138079994337',
  password: 'cc03e747a6afbbcbf8be7668acfebee5',
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Endpoint/25138079994337/',
  sip_registered: 'false',
  sip_uri: 'sip:testuser150921105140@phone.plivo.com',
  sub_account: null,
  username: 'testuser150921105140' }
*/

// Delete an endpoint
var params = {
    'endpoint_id' : '25138079994337' // ID of the endpoint that as to be deleted
};
p.delete_endpoint(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  204
*/