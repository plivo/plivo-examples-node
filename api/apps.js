var plivo = require('plivo');

(function main() {
    'use strict';

    // Create a new application    
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.applications.create(
        "Test Application", // The name of your application
        {
            answerUrl: "http://answer.url", // The URL Plivo will fetch when a call executes this application
        }
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();


/*
Sample Output
{ 
    api_id: 'e2f9fa62-604c-11e5-9059-22000ac51d70',
    app_id: '30171573048968285',
    message: 'created' 
}
*/

// Modify an application

client.applications.update(
    "15784735442685051", // ID of the application that has to be modified
    {
        answerUrl: "http://updated.answer.url", // Values that have to be updated
    },
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
{ 
    api_id: '097e20ea-604e-11e5-9421-22000ac55bd1',
    message: 'changed' 
}
*/

// Get details of all applications
client.applications.list({
    offset: 0, // The number of results per page
    limit: 5, // The number of value items by which the results should be offset
}, ).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
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
*/

// Get details of a single application

client.applications.get(
    "15784735442685051", // ID of the application for which the details have to be retrieved
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
Status:  200
API Response:
 { answer_method: 'POST',
  answer_url: 'http://exampletest.com',
  api_id: '3f05e324-604e-11e5-9968-22000abfb1f6',
  app_id: '30171573048968285',
  app_name: 'Testing_App',
  default_app: false,
  default_endpoint_app: false,
  enabled: true,
  fallback_answer_url: '',
  fallback_method: 'POST',
  hangup_method: 'POST',
  hangup_url: 'http://example.com',
  message_method: 'POST',
  message_url: '',
  public_uri: false,
  resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/Application/30171573048968285/',
  sip_uri: 'sip:30171573048968285@app.plivo.com',
  sub_account: null }
*/

// Delete an application
client.applications.delete(
    "15784735442685051", // ID of the application that as to be deleted
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
No Content
*/