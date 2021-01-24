var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    // Create a new endpoint
    client.endpoints.create(
        "testusername", // The username for the endpoint to be created
        "testpassword", // The password for your endpoint username
        "Test Account", // Alias for this endpoint
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();

/*
Sample Output
{
	"username": "zumba131031145958",
	"alias": "zumba",
	"message": "created",
	"endpoint_id": "37371860103666",
	"api_id": "1c13de4c-423d-11e3-9899-22000abfa5d5"
}
*/

// Modify an endpoint
client.endpoints.update(
    "39452475478853", // ID of the endpoint that has to be modified
    {
        alias: "Updated Endpoint Alias", // Values that have to be updated
    },
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
{ 
    api_id: 'e0b42faa-604e-11e5-a78c-22000abfa4f6',
    message: 'changed' 
}
*/

// Get details of all endpoints
client.endpoints.list({
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
  "api_id": "30a0c8c2-110c-11e4-bd8a-12313f016a39",
  "meta": {
    "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total_count": 11
  },
  "objects": [{
      "alias": "callme",
      "application": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Application/33406267401237901/",
      "endpoint_id": "32866729519064",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Endpoint/32866729519064/",
      "sip_contact": "sip:callme140703093224@122.172.71.207:57563;ob",
      "sip_expires": "2014-07-21 19:26:08",
      "sip_registered": "true",
      "sip_uri": "sip:callme140703093944@phone.plivo.com",
      "sip_user_agent": "Telephone 1.1.4",
      "sub_account": null,
      "username": "callme140703093944"
    },
    {
      "alias": "polycom",
      "application": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Application/37961981447734951/",
      "endpoint_id": "17551316589618",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Endpoint/17551316589618/",
      "sip_registered": "false",
      "sip_uri": "sip:polycom140506175228@phone.plivo.com",
      "sub_account": null,
      "username": "polycom140506175448"
    }
  ]
}
*/

// Get details of a single endpoint
client.endpoints.get(
    "39452475478853", // ID of the endpoint for which the details have to be retrieved
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
{ 
    alias: 'New_test',
    api_id: '1359f8d6-604f-11e5-990f-22000ac541f7',
    application: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
    endpoint_id: '25138079994337',
    password: 'cc03e747a6afbbcbf8be7668acfebee5',
    resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Endpoint/25138079994337/',
    sip_registered: 'false',
    sip_uri: 'sip:testuser150921105140@phone.plivo.com',
    sub_account: null,
    username: 'testuser150921105140' 
}
*/

// Delete an endpoint
var params = {
    'endpoint_id': '25138079994337' // ID of the endpoint that as to be deleted
};
p.delete_endpoint(params, function(status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
No Content
*/