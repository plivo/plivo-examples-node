var plivo = require('plivo');

(function main() {
    'use strict';
    
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");

    // Link an application to a number
    client.numbers.update(
        "17609915566", // Number that has to be linked to an application
        {
          app_id: "77543232947799695", // Application ID that has to be linked
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();

/*
Sample Output
API Response:
{
  "message": "changed",
  "api_id": "5a9fcb68-582d-11e1-86da-6ff39efcb949"
}
*/

// Unlink an application from an number
client.numbers.update(
  "17609915566", // Number that has to be linked to an application
  {
    app_id: "", // Application ID that has to be linked
  },
).then(function (response) {
  console.log(response);
}, function (err) {
  console.error(err);
});
/*
Sample Output
API Response:
{
  "message": "changed",
  "api_id": "5a9fcb68-582d-11e1-86da-6ff39efcb949"
}
*/