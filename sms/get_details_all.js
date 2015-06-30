var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = { };

p.get_messages(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output
Status:  200
API Response:
 { api_id: '4cff1804-1a78-11e5-84ff-22000ac89064',
  meta: 
   { limit: 20,
     next: '/v1/Account/XXXXXXXXXXXXXXX/Message/?limit=20&offset=20',
     offset: 0,
     previous: null,
     total_count: 809 },
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
       message_direction: 'outbound',
       message_state: 'delivered',
       message_time: '2015-06-23 16:01:13+05:30',
       message_type: 'sms',
       message_uuid: 'f909e73c-1992-11e5-96a7-22000ae98567',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Message/f909e73c-1992-11e5-96a7-22000ae98567/',
       to_number: '12109206499',
       total_amount: '0.00000',
       total_rate: '0.00000',
       units: 1 },
     ] 
    }
}

*/

// Filtering the records

var params1 = {
    'limit': '2', // The number of results per page
    'offset' : '0', // The number of value items by which the results should be offset
    'message_state' : "delivered", // The state of the message to be filtered
    'message_direction' : "inbound" // The direction of te message to be fltered
};

p.get_messages(params1, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

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

