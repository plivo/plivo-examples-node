var plivo = require('plivo');

(function main() {
    'use strict';

    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    // Get account details
    client.accounts.get().then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();
/*
Sample Output
{ 
    account_type: 'standard',
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
    timezone: 'Asia/Kolkata' 
}
*/

// Modify account
client.accounts.update({
    name: "Test Account", // Name of the account holder or business.
    city: "Testing City", // City of the account holder
    address: "Test Address", // Address of the account holde
}, ).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
API Response:
{ 
    api_id: '8182f748-6047-11e5-9059-22000ac51d70',
    message: 'changed' 
}
*/


// Create a sub account
client.subAccounts.create(
    "Test Subaccount", // Name of the subaccount
    true // Specify if the subaccount should be enabled or not
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});


/*
Sample Output
{
    api_id: '9c72eb12-6047-11e5-9421-22000ac55bd1',
    auth_id: 'SAYTNKOGVJOTDKNTE5ZW',
    auth_token: 'MGFhODZjOTRkNzg1ZDdhNWRkMjJkNzY4ZmYxNGYw',
    message: 'created' 
}
*/

// Modify a subaccount
client.subaccounts.update(
    "SAXXXXXXXXXXXXXXXXXX", // Auth ID of the sub acccount that has to be modified
    "Updated Subaccount Name", // Name of the subaccount
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
Status:  202
API Response:
{ 
    api_id: 'b474da9a-6047-11e5-9059-22000ac51d70',
    message: 'changed' 
}
*/

// Get details of all subaccounts
client.subaccounts.list({
    offset: 0, // The number of results per page
    limit: 5, // The number of value items by which the results should be offset
}, ).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
 {
  "api_id": "b38bf42e-0db4-11e4-8a4a-123140008edf",
  "meta": {
    "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total_count": 2
  },
  "objects": [{
      "account": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/",
      "auth_id": "SAXXXXXXXXXXXXXXXXXX",
      "auth_token": "MTZjYWM0YzVjNjMwZmVmODFiNWJjNWJmOGJjZjgw",
      "created": "2014-07-17",
      "enabled": false,
      "modified": null,
      "name": "Chewbacca",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Subaccount/SAXXXXXXXXXXXXXXXXXX/"
    },
    {
      "account": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/",
      "auth_id": "SAXXXXXXXXXXXXXXXXXX",
      "auth_token": "OTdhMjYwMWYxOGMyNpFjNzUwYWM3YWI3NjY4Y2Ey",
      "created": "2012-09-23",
      "enabled": true,
      "modified": "2012-09-23",
      "name": "new",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Subaccount/SAXXXXXXXXXXXXXXXXXX/"
    }
  ]
}
*/

// Get details of a single subaccounts
client.subaccounts.get(
    "SAXXXXXXXXXXXXXXXXXX", // Auth ID of the sub acccount for which the details have to be retrieved
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
 {
  "account": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/",
  "api_id": "323972b2-0db3-11e4-a2d1-22000ac5040c",
  "auth_id": "SAXXXXXXXXXXXXXXXXXX",
  "auth_token": "MTZjYWM0YzVjNjMwZmVmODFiNWJjNWJmOGJjZjgw",
  "created": "2014-07-17",
  "enabled": false,
  "modified": null,
  "name": "Han Solo",
  "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Subaccount/SAXXXXXXXXXXXXXXXXXX/"
}
*/

// Delete a subaccount
client.subaccounts.delete(
    "SAXXXXXXXXXXXXXXXXXX", // Auth ID of the sub acccount for which the details have to be retrieved
    true //cascade=true/false. If cascade is set to true, the Applications, Endpoints, and Numbers associated with the Subaccount are also deleted
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});


/*
Sample Output
No Content
*/