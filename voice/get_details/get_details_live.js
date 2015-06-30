var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = { 
    'status': 'live' // The status of the call
};

// Prints the complete response
p.get_live_calls(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    console.log('API ID : ', response['api_id']);
    // Looping through the call uuids
    for ( uuid in response['calls'] ){
        console.log('Call UUID : ', response['calls'][uuid] );
    }

});

/*
Sample  Output

Status:  200
API Response:
 { api_id: '22cef816-5226-11e5-acf3-22000abfaafd',
  calls: 
   [ 'f033083e-5225-11e5-87e5-091a0ac416fa',
     'efff017e-5225-11e5-87d5-091a0ac416fa' ] }
API ID :  22cef816-5226-11e5-acf3-22000abfaafd
Call UUID :  f033083e-5225-11e5-87e5-091a0ac416fa
Call UUID :  efff017e-5225-11e5-87d5-091a0ac416fa
*/