// Example for Call delete
var plivo = require('plivo');

(function main() {
    'use strict';

    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.calls.hangup(
        "eba53b9e-8fbd-45c1-9444-696d2172fbc8", // UUID of the call to be hung up
    ).then(function(response) {
        console.log(response);
    }, function(err) {
        console.error(err);
    });
})();

/* 
Sample successful output
No response

Sample unsuccesful output
{  "api_id": "835fcb44-31cc-11e5-a541-22000afa85ca",
    "error": "call not found" }
*/
