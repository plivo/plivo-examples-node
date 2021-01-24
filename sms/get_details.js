var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    client.messages.get("ce038b12-5a2b-11eb-8693-0242ac110004" // Message UUID for which the details have to be retrieved
    ).then(function(response) {
        console.log(response);
        console.log(response.units);
        console.log(response.messageState);
    }, );
})();

/* 
Sample Output

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