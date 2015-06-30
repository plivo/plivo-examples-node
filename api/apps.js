var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Create a new application
var params = {
    'answer_url': 'http://example.com', // The URL Plivo will fetch when a call executes this application
    'app_name': 'Testing_App' // The name of your application
};
p.create_application(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  201
API Response:
 { api_id: 'e2f9fa62-604c-11e5-9059-22000ac51d70',
  app_id: '30171573048968285',
  message: 'created' }
*/

// Modify an application
var params = {
    'app_id' : '30171573048968285', // ID of the application that has to be modified
    'answer_url': 'http://exampletest.com' // Values that have to be updated
};
p.modify_application(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: '097e20ea-604e-11e5-9421-22000ac55bd1',
  message: 'changed' }
*/

// Get details of all applications
var params = {
    'limit' : '10', // The number of results per page
    'offset' : '0' // The number of value items by which the results should be offset
};
p.get_applications(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: '1a574090-604e-11e5-95b0-22000acaa390',
  meta: 
   { limit: 2,
     next: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/?limit=2&offset=2',
     offset: 0,
     previous: null,
     total_count: 9 },
  objects: 
   [ { answer_method: 'POST',
       answer_url: 'http://exampletest.com',
       app_id: '30171573048968285',
       app_name: 'Testing_App',
       default_app: false,
       default_endpoint_app: false,
       enabled: true,
       fallback_answer_url: '',
       fallback_method: 'POST',
       hangup_method: 'POST',
       hangup_url: 'http://example.com',
       message_method: 'POST',
       message_url: '',
       public_uri: false,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/30171573048968285/',
       sip_uri: 'sip:30171573048968285@app.plivo.com',
       sub_account: null },
     { answer_method: 'GET',
       answer_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       app_id: '16632742496743552',
       app_name: 'Direct Dial',
       default_app: true,
       default_endpoint_app: true,
       enabled: true,
       fallback_answer_url: '',
       fallback_method: 'POST',
       hangup_method: 'POST',
       hangup_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       message_method: 'GET',
       message_url: 'http://requestb.in/rnl6n7rn',
       public_uri: true,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
       sip_uri: 'sip:16632742496743552@app.plivo.com',
       sub_account: null } ] }
*/

// Get details of a single application
var params = {
    'app_id': '30171573048968285' // ID of the application for which the details have to be retrieved
};
p.get_application(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { answer_method: 'POST',
  answer_url: 'http://exampletest.com',
  api_id: '3f05e324-604e-11e5-9968-22000abfb1f6',
  app_id: '30171573048968285',
  app_name: 'Testing_App',
  default_app: false,
  default_endpoint_app: false,
  enabled: true,
  fallback_answer_url: '',
  fallback_method: 'POST',
  hangup_method: 'POST',
  hangup_url: 'http://example.com',
  message_method: 'POST',
  message_url: '',
  public_uri: false,
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/30171573048968285/',
  sip_uri: 'sip:30171573048968285@app.plivo.com',
  sub_account: null }
*/

// Delete an application
var params = {
    'app_id' : '30171573048968285' // ID of the application that as to be deleted
};
p.delete_application(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  204
*/