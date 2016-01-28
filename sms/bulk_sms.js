var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'src': '1111111111', // Sender's phone number with country code
    'dst' : '2222222222<3333333333', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo" // Your SMS Text Message
};

p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    for ( uuid in response['message_uuid'] ){
        console.log('Message UUID : ', response['message_uuid'][uuid] );
    }
});

// When an invalid number is given as dst parameter, an error will be thrown and the message will not be sent

var params1 = {
    'src': '1111111111', // Sender's phone number with country code
    'dst' : '2222222222<33333', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo" // Your SMS Text Message
};

p.send_message(params1, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output

Status:  202
API Response:
 { api_id: '816e4650-7195-11e5-bfb4-22000afc235b',
  message: 'message(s) queued',
  message_uuid: 
   [ '2b59a36d-9368-4a63-8578-82ab4e74c163',
     'eeca2f78-e20a-45d6-a5d0-a9c0a19c1605' ] }
Message UUID :  2b59a36d-9368-4a63-8578-82ab4e74c163
Message UUID :  eeca2f78-e20a-45d6-a5d0-a9c0a19c1605

Sample Output for invalid number
Status:  400
API Response:
 { api_id: '92bc9f68-7195-11e5-8620-22000af98256',
  error: '33333 is not a valid phone number' }
*/