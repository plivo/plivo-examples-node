var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'message_uuid': '005bcdf3-b1b9-4487-b8d3-59efb41431ca', // Message UUID for which the details have to be retrieved
};

p.get_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    console.log('Units:', response['units']);
    console.log('Status:', response['message_state']);
});

/* 
Sample Output

Status:  200
API Response:
 { api_id: '04402e56-142d-11e5-b483-22000afb8d0a',
  from_number: '1111111111',
  message_direction: 'outbound',
  message_state: 'delivered',
  message_time: '2015-06-15 17:08:05+05:30',
  message_type: 'sms',
  message_uuid: '005bcdf3-b1b9-4487-b8d3-59efb41431ca',
  resource_uri: '/v1/Account/XXXXXXXXXXXX/Message/005bcdf3-b1b9-4487-b8d3-59efb41431ca/',
  to_number: '2222222222',
  total_amount: '0.00650',
  total_rate: '0.00650',
  units: 1 }
Units: 1
Status: delivered
*/
