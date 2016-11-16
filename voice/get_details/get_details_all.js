var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = { };

// Prints the complete response
p.get_cdrs(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

// Filtering the records

var params = {
    'end_time__gt' : '2015-09-01 11:47' // Filter out calls according to the time of completion. gte stands for greater than or equal.
    'call_direction' : 'outbound', // Filter the results by call direction. The valid inputs are inbound and outbound
    'from_number' : '1111111111', // Filter the results by the number from where the call originated
    'to_number' : '2222222222', // Filter the results by the number to which the call was made
    'limit' : '10', // The number of results per page
    'offset' : '0' // The number of value items by which the results should be offset
};

p.get_cdrs(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/* 
Sample Output

Status:  200
API Response:
 { api_id: '4b432d82-521f-11e5-aaa1-22000ac6044d',
  meta: 
   { limit: 20,
     next: '/v1/Account/XXXXXXXXXXXXXXX/Call/?limit=20&offset=20',
     offset: 0,
     previous: null,
     total_count: 36 },
  objects: 
   [ { bill_duration: 0,
       billed_duration: 0,
       call_direction: 'outbound',
       call_duration: 0,
       call_uuid: 'c213f3de-519c-11e5-9951-0f30c3844b2e',
       end_time: '2015-09-02 23:32:31+05:30',
       from_number: '+1111111111',
       parent_call_uuid: null,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Call/c213f3de-519c-11e5-9951-0f30c3844b2e/',
       to_number: '22222222222',
       total_amount: '0.00000',
       total_rate: '0.60600' },
     { bill_duration: 0,
       billed_duration: 0,
       call_direction: 'outbound',
       call_duration: 0,
       call_uuid: 'b7d01406-517f-11e5-966d-917638b19e6d',
       end_time: '2015-09-02 20:04:38+05:30',
       from_number: '+1111111111',
       parent_call_uuid: null,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Call/b7d01406-517f-11e5-966d-917638b19e6d/',
       to_number: '22222222222',
       total_amount: '0.00000',
       total_rate: '0.60600' },
    ] 
  }

  With Filters

Status:  200
API Response:
 { api_id: '4b432d82-521f-11e5-aaa1-22000ac6044d',
  meta: 
   { limit: 10,
     next: null,
     offset: 0,
     previous: null,
     total_count: 2  },
  objects: 
   [ { bill_duration: 0,
       billed_duration: 0,
       call_direction: 'outbound',
       call_duration: 0,
       call_uuid: 'c213f3de-519c-11e5-9951-0f30c3844b2e',
       end_time: '2015-09-02 23:32:31+05:30',
       from_number: '+1111111111',
       parent_call_uuid: null,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Call/c213f3de-519c-11e5-9951-0f30c3844b2e/',
       to_number: '22222222222',
       total_amount: '0.00000',
       total_rate: '0.60600' },
     { bill_duration: 0,
       billed_duration: 0,
       call_direction: 'outbound',
       call_duration: 0,
       call_uuid: 'b7d01406-517f-11e5-966d-917638b19e6d',
       end_time: '2015-09-02 20:04:38+05:30',
       from_number: '+1111111111',
       parent_call_uuid: null,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Call/b7d01406-517f-11e5-966d-917638b19e6d/',
       to_number: '22222222222',
       total_amount: '0.00000',
       total_rate: '0.60600' },
    ] 
  }

*/