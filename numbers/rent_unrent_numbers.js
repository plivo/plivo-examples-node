var plivo = require('plivo');

(function main() {
    'use strict';

    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");

    // Search for new number
    client.numbers.search(
        "US", // country iso
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();

/*
Sample Output
Status:  200
API Response:
 { api_id: '4dffb7f6-6062-11e5-9059-22000ac51d70',
  meta: 
   { limit: 20,
     next: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/?limit=20&country_iso=US&pattern=210&region=Texas&offset=20&type=local',
     offset: 0,
     previous: null,
     total_count: 677 },
  objects: 
   [ { country: 'UNITED STATES',
       lata: 566,
       monthly_rental_rate: '0.80000',
       number: '12106706640',
       prefix: '210',
       rate_center: 'SANANTONIO',
       region: 'Texas, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/12106706640/',
       restriction: null,
       restriction_text: null,
       setup_rate: '0.00000',
       sms_enabled: true,
       sms_rate: '0.00000',
       type: 'fixed',
       voice_enabled: true,
       voice_rate: '0.00850' },
     { country: 'UNITED STATES',
       lata: 566,
       monthly_rental_rate: '0.80000',
       number: '12106706641',
       prefix: '210',
       rate_center: 'SANANTONIO',
       region: 'Texas, UNITED STATES',
       resource_uri: '/v1/Account/XXXXXXXXXXXXXXXXX/PhoneNumber/12106706641/',
       restriction: null,
       restriction_text: null,
       setup_rate: '0.00000',
       sms_enabled: true,
       sms_rate: '0.00000',
       type: 'fixed',
       voice_enabled: true,
       voice_rate: '0.00850' } ] }
*/

// Buy a phone number
client.numbers.buy(
    "10123456789", // The phone number

).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
API Response:
{
    "api_id": "aa52882c-1c88-11e4-bd8a-12313f016a39",
    "message": "created",
    "numbers": [
        {
            "number": "10123456789",
            "status": "Success"
        }
    ],
    "status": "fulfilled"
}
*/

// Modify alias of a number
client.numbers.update(
    "17609915566", // Number that has to be modified
    {
        alias: "Updated Alias", // The textual name given to the number
    },
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
{
  "message": "changed",
  "api_id": "5a9fcb68-582d-11e1-86da-6ff39efcb949"
}
*/

// Modify application linked to a number
client.numbers.update(
    "17609915566", // Number that has to be modified
    {
        app_id: "16638156474000802", // The application id of the application that is to be linked
    },
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
{
  "message": "changed",
  "api_id": "5a9fcb68-582d-11e1-86da-6ff39efcb949"
}
*/

// Unrent a number
client.numbers.unrent(
    "17609915566", // Number that has to be unrented
).then(function(response) {
    console.log(response);
}, function(err) {
    console.error(err);
});

/*
Sample Output
No output
*/