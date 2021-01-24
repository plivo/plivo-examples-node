// Example for LiveCall get

var plivo = require('plivo');

(function main() {
    'use strict';
    
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");
    client.calls.getLiveCall(
        "eba53b9e-8fbd-45c1-9444-696d2172fbc8", // call uuid
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();

/*
Sample  Output
{
  "direction": "inbound",
  "from": "15856338537",
  "call_status": "in-progress",
  "api_id": "45223222-74f8-11e1-8ea7-12313806be9a",
  "to": "14154290945",
  "caller_name": "+15856338537",
  "call_uuid": "6653422-91b6-4716-9fad-9463daaeeec2",
  "session_start": "2014-03-23 14:49:39.722551" // Format: YYYY-MM-DD HH:mm:ss.sssss Timezone: UTC
}
*/
