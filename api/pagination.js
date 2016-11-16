var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

// Get details of all applications
var params = {
    'limit' : '2', // The number of results per page
    'offset' : '0' // The number of value items by which the results should be offset
};
p.get_applications(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    console.log('Next: ', response['meta']['next'])
});

/*
Sample Output
Status:  200
API Response:
 { api_id: '034bc842-6050-11e5-a78c-22000abfa4f6',
  meta: 
   { limit: 2,
     next: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/?limit=2&offset=2',
     offset: 0,
     previous: null,
     total_count: 8 },
  objects: 
   [ { answer_method: 'GET',
       answer_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       app_id: '16632742496743552',
       app_name: 'Direct Dial',
       default_app: true,
       default_endpoint_app: true,
       enabled: true,
       fallback_answer_url: '',
       fallback_method: 'POST',
       hangup_method: 'POST',
       hangup_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       message_method: 'GET',
       message_url: 'http://requestb.in/rnl6n7rn',
       public_uri: true,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/16632742496743552/',
       sip_uri: 'sip:16632742496743552@app.plivo.com',
       sub_account: null },
     { answer_method: 'GET',
       answer_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       app_id: '27082215185108636',
       app_name: 'Dial From Ramya',
       default_app: false,
       default_endpoint_app: false,
       enabled: true,
       fallback_answer_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       fallback_method: 'POST',
       hangup_method: 'POST',
       hangup_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       message_method: 'POST',
       message_url: 'http://plivodirectdial.herokuapp.com/response/sip/route/?DialMusic=real&CLID=919176616491',
       public_uri: true,
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/27082215185108636/',
       sip_uri: 'sip:27082215185108636@app.plivo.com',
       sub_account: null } ] }
       
Next:  /v1/Account/XXXXXXXXXXXXXXXXX/Application/?limit=2&offset=2
*/