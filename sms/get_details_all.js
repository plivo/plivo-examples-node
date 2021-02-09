var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.messages.list({
        limit: 5,
        offset: 0,
    }).then(function(response) {
        console.log(response);
    }, );
})();

/*
Sample Output:
 {
  "api_id": "88415194-6df0-11e6-b608-06a72a185e87",
  "meta": {
	"limit": 2,
	"next": "/v1/Account/{auth_id}/Message/?limit=20&error_code=200&offset=20",
	"offset": 0,
	"previous": null,
	"total_count": 22
  },
  "objects": [
	{
	  "error_code": "200",
	  "from_number": "18552828641",
	  "message_direction": "outbound",
	  "message_state": "failed",
	  "message_time": "2016-08-17 21:26:44+05:30",
	  "message_type": "sms",
	  "message_uuid": "85ce8068-6fab-4f0a-9dc7-d6c852cdde91",
	  "resource_uri": "/v1/Account/{auth_id}/Message/85ce8068-6fab-4f0a-9dc7-d6c852cdde91/",
	  "to_number": "19352326448",
	  "total_amount": "0.00000",
	  "total_rate": "0.00350",
	  "units": 1
	},
	{
	  "error_code": "200",
	  "from_number": "18552828641",
	  "message_direction": "outbound",
	  "message_state": "failed",
	  "message_time": "2016-08-17 21:22:36+05:30",
	  "message_type": "sms",
	  "message_uuid": "2a340179-e8a9-4b1d-ae2c-9f346e7b6d7d",
	  "resource_uri": "/v1/Account/{auth_id}/Message/2a340179-e8a9-4b1d-ae2c-9f346e7b6d7d/",
	  "to_number": "19352326448",
	  "total_amount": "0.00000",
	  "total_rate": "0.00350",
	  "units": 1
	}
  ]
}
*/

// Filtering the records

var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.messages.list({
        limit: 5, // The number of results per page
        offset: 0, // The number of value items by which the results should be offset
        message_state: 'delivered', // The state of the message to be filtered
        message_direction: 'inbound' // The direction of te message to be fltered
    }).then(function(response) {
        console.log(response);
    }, );
})();

/*
Sample Output

API Response:
 { api_id: 'd90d2282-1a78-11e5-9335-22000ac50cb2',
  meta: 
   { limit: 2,
     next: '/v1/Account/XXXXXXXXXXXXXXX/Message/?message_state=delivered&limit=2&offset=2&message_direction=inbound',
     offset: 0,
     previous: null,
     total_count: 273 },
  objects: 
   [ { from_number: '14155069431',
       message_direction: 'inbound',
       message_state: 'delivered',
       message_time: '2015-06-23 16:03:17+05:30',
       message_type: 'sms',
       message_uuid: '42f2e5d8-1993-11e5-a4b5-22000afd08f6',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Message/42f2e5d8-1993-11e5-a4b5-22000afd08f6/',
       to_number: '12109206499',
       total_amount: '0.00000',
       total_rate: '0.00000',
       units: 1 },
     { from_number: '14155069431',
       message_direction: 'inbound',
       message_state: 'delivered',
       message_time: '2015-06-23 16:01:13+05:30',
       message_type: 'sms',
       message_uuid: 'f909e73c-1992-11e5-96a7-22000ae98567',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Message/f909e73c-1992-11e5-96a7-22000ae98567/',
       to_number: '12109206499',
       total_amount: '0.00000',
       total_rate: '0.00000',
       units: 1 } ] }

*/

