var plivo = require('plivo');

(function main() {
    'use strict';
    
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");
    client.applications.list(
        {
            offset: 0, // The number of value items by which the results should be offset
            limit: 5, // The number of results per page
        },
    ).then(function (response) {
        console.log(response); // Prints the complete response
        console.log('Next: ', response['meta']['next'])
    }, function (err) {
        console.error(err);
    });
})();
var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

// Get details of all applications
var params = {
    'limit' : '2', 
    'offset' : '0' 
};
p.get_applications(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    console.log('Next: ', response['meta']['next'])
});

/*
Sample Output
{
    "api_id": "05d17723-5984-11eb-9710-0242ac11000a",
    "meta": {
        "limit": 20,
        "next": null,
        "offset": 0,
        "previous": null,
        "total_count": 4
    },
    "objects": [
        {
            "answer_method": "GET",
            "answer_url": "https://s3.amazonaws.com/plivosamplexml/conference_url.xml",
            "app_id": "77543232947799695",
            "app_name": "Demo Conference",
            "application_type": "XML",
            "default_app": false,
            "default_endpoint_app": false,
            "enabled": true,
            "fallback_answer_url": "",
            "fallback_method": "POST",
            "hangup_method": "GET",
            "hangup_url": "https://s3.amazonaws.com/plivosamplexml/conference_url.xml",
            "log_incoming_message": true,
            "message_method": "POST",
            "message_url": "",
            "public_uri": false,
            "resource_uri": "/v1/Account/MAXXXXXXXXXXXXX/Application/77543232947799695/",
            "sip_uri": "sip:77543232947799695@app.plivo.com",
            "sub_account": null
        },
        {
            "answer_method": "GET",
            "answer_url": "https://s3.amazonaws.com/plivosamplexml/play_url.xml",
            "app_id": "77532213102675586",
            "app_name": "Demo Play",
            "application_type": "XML",
            "default_app": false,
            "default_endpoint_app": false,
            "enabled": true,
            "fallback_answer_url": null,
            "fallback_method": "POST",
            "hangup_method": "GET",
            "hangup_url": "https://s3.amazonaws.com/plivosamplexml/play_url.xml",
            "log_incoming_message": true,
            "message_method": "POST",
            "message_url": null,
            "public_uri": false,
            "resource_uri": "/v1/Account/MAXXXXXXXXXXXXX/Application/77532213102675586/",
            "sip_uri": "sip:77532213102675586@app.plivo.com",
            "sub_account": null
        },
        {
            "answer_method": "GET",
            "answer_url": "http://callforward.herokuapp.com/forward/?Users=sip:xlite180426090329@phone.plivo.com",
            "app_id": "77521409550435141",
            "app_name": "Call Forward",
            "application_type": "XML",
            "default_app": false,
            "default_endpoint_app": false,
            "enabled": true,
            "fallback_answer_url": "",
            "fallback_method": "POST",
            "hangup_method": "GET",
            "hangup_url": "http://callforward.herokuapp.com/forward/?Numbers=NUMBER_1_HERE,NUMBER_2_HERE",
            "log_incoming_message": true,
            "message_method": "POST",
            "message_url": "",
            "public_uri": false,
            "resource_uri": "/v1/Account/MAXXXXXXXXXXXXX/Application/77521409550435141/",
            "sip_uri": "sip:77521409550435141@app.plivo.com",
            "sub_account": null
        },
        {
            "answer_method": "GET",
            "answer_url": "http://s3.amazonaws.com/static.plivo.com/answer.xml",
            "app_id": "77494029089751836",
            "app_name": "Demo Speak",
            "application_type": "XML",
            "default_app": false,
            "default_endpoint_app": false,
            "enabled": true,
            "fallback_answer_url": "https://s3.amazonaws.com/plivosamplexml/fallback_url.xml",
            "fallback_method": "GET",
            "hangup_method": "POST",
            "hangup_url": "https://s3.amazonaws.com/plivosamplexml/fallback_url.xml",
            "log_incoming_message": true,
            "message_method": "POST",
            "message_url": "http://webhook.site/ac5c4327-4eb7-439a-8a43-ebdbf802651c",
            "public_uri": false,
            "resource_uri": "/v1/Account/MAXXXXXXXXXXXXX/Application/77494029089751836/",
            "sip_uri": "sip:77494029089751836@app.plivo.com",
            "sub_account": null
        }
    ]
}
       
Next:  /v1/Account/XXXXXXXXXXXXXXXXX/Application/?limit=2&offset=2
*/