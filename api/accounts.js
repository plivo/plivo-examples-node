var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = { };

// Get account details
p.get_account(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { account_type: 'standard',
  address: 'Sample address',
  api_id: '6b3747d2-6047-11e5-9059-22000ac51d70',
  auth_id: 'XXXXXXXXXXXXXXXXX',
  auto_recharge: false,
  billing_mode: 'prepaid',
  cash_credits: '35.25366',
  city: 'Test City',
  name: 'Test',
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/',
  state: '',
  timezone: 'Asia/Kolkata' }
*/

// Modify account
var params = {
    'name' : 'Test', // Name of the account holder or business.
    'city' : 'Testing City', // City of the account holder
    'address' : 'Sample address', // Address of the account holde
    'timezone' : 'Indian/Mauritius' // Time zone of the account holder
};
p.modify_account(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: '8182f748-6047-11e5-9059-22000ac51d70',
  message: 'changed' }
*/

// Create a sub account
var params = {
    'name' : 'test_subaccount1', // Name of the subaccount
    'enabled' : 'True' // Specify if the subaccount should be enabled or not
};
p.create_subaccount(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  201
API Response:
 { api_id: '9c72eb12-6047-11e5-9421-22000ac55bd1',
  auth_id: 'SAYTNKOGVJOTDKNTE5ZW',
  auth_token: 'MGFhODZjOTRkNzg1ZDdhNWRkMjJkNzY4ZmYxNGYw',
  message: 'created' }
*/

// Modify a subaccount
var params = {
    'subauth_id' : 'ZZZZZZZZZZZZ', // Auth ID of the sub acccount that has to be modified
    'name' : 'ABC_test' // Name of the subaccount
};
p.modify_subaccount(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  202
API Response:
 { api_id: 'b474da9a-6047-11e5-9059-22000ac51d70',
  message: 'changed' }
*/

// Get details of all subaccounts
var params = {
    'limit' : '5', // The number of results per page
    'offset' : '1' // The number of value items by which the results should be offset
};
p.get_subaccounts(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: 'c55880f0-6047-11e5-9421-22000ac55bd1',
  meta: { limit: 5, next: null, offset: 1, previous: null, total_count: 2 },
  objects: 
   [ { account: '/v1/Account/XXXXXXXXXXXXXXXXX/',
       auth_id: 'ZZZZZZZZZZZZ',
       auth_token: 'VVVVVVVVVVVVVVVVVVVVV',
       created: '2015-08-20',
       enabled: true,
       modified: null,
       name: 'Testing123',
       new_auth_token: 'VVVVVVVVVVVVVVVVVVVVV',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Subaccount/ZZZZZZZZZZZZ/' },
     { account: '/v1/Account/XXXXXXXXXXXXXXXXX/',
       auth_id: 'YYYYYYYYYYYYY',
       auth_token: 'WWWWWWWWWWWWWWWWWWWW',
       created: '2015-03-10',
       enabled: true,
       modified: '2015-07-20',
       name: 'booyaka',
       new_auth_token: 'WWWWWWWWWWWWWWWWWWWW',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Subaccount/YYYYYYYYYYYYY/' } ] }
*/

// Get details of a single subaccounts
var params = {
    'subauth_id' : 'ZZZZZZZZZZZZ', // Auth ID of the sub acccount for which the details have to be retrieved
};
p.get_subaccount(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { account: '/v1/Account/XXXXXXXXXXXXXXXXX/',
  api_id: '222a1942-6048-11e5-95b0-22000acaa390',
  auth_id: 'YYYYYYYYYYYYY',
  auth_token: 'WWWWWWWWWWWWWWWWWWWW',
  created: '2015-09-21',
  enabled: true,
  modified: '2015-09-21',
  name: 'ABC_test',
  new_auth_token: 'WWWWWWWWWWWWWWWWWWWW',
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Subaccount/YYYYYYYYYYYYY/' }
*/

// Delete a subaccount
var params = {
    'subauth_id' : 'ZZZZZZZZZZZZ', // Auth ID of the sub acccount for which the details have to be retrieved
};
p.delete_subaccount(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  204
*/