var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = { 
    'call_uuid' : '55309cee-821d-11e4-9a73-498d468c930b' // ID of the call.
};

// Prints the complete response
p.get_cdr(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample  Output

Status:  200
API Response:
 { api_id: '51bdd1c2-5223-11e5-aa37-22000ac52edc',
  bill_duration: 0,
  billed_duration: 0,
  call_direction: 'outbound',
  call_duration: 0,
  call_uuid: '55309cee-821d-11e4-9a73-498d468c930b',
  end_time: '2014-12-12 22:09:02+05:30',
  from_number: null,
  parent_call_uuid: null,
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXX/Call/55309cee-821d-11e4-9a73-498d468c930b/',
  to_number: '919176616491',
  total_amount: '0.00000',
  total_rate: '0.00000' }

*/
