var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.messages.create(
        "+14151113333", // Sender's phone number with country code
        "+14151112222<+14151114444", // Receiver's phone Number with country code
        "Hello, this is a sample text from Plivo", // Your SMS Text Message - English
        // "こんにちは、元気ですか？" // Your SMS Text Message - Japanese
        // "Ce est texte généré aléatoirement" // Your SMS Text Message - French
        {
            method: "GET", // Method used to trigger message URL.
            url: "http://foo.com/sms_status/" // The URL to which with the status of the message is sent
        },

    ).then(function(response) {
        console.log(response);
    }, );
})();

/* 
Sample Output
{ 
  api_id: 'b91b8736-134b-11e5-b0d7-22000ac520cd',
  message: 'message(s) queued',
  message_uuid: [ 
      '138ee55f-9efb-4fc3-8ad7-4d71219bf56c',
      '6da4afba-2bcf-4a87-9eff-d2f88577b0f1' 
    ] 
}
*/

// When an invalid number is given as dst parameter, an error will be thrown and the message will not be sent

client.messages.create(
    "+14151113333", // Sender's phone number with country code
    "+14151112222<+33333", // Receiver's phone Number with country code
    "Hello, this is a sample text from Plivo", // Your SMS Text Message - English
    // "こんにちは、元気ですか？" // Your SMS Text Message - Japanese
    // "Ce est texte généré aléatoirement" // Your SMS Text Message - French
    {
        method: "GET", // Method used to trigger message URL.
        url: "http://foo.com/sms_status/" // The URL to which with the status of the message is sent
    },

).then(function(response) {
    console.log(response);
}, );

/*
Sample Output

{
  "api_id": "984bc856-9231-11e7-b886-067c5485c240",
  "invalid_number": [
    "jsgf3dsjh28372"
  ],
  "message": "message(s) queued",
  "message_uuid": [
    "6da4afba-2bcf-4a87-9eff-d2f88577b0f1",
    "6da384ba-19js-aand-2h3g-r2f8ja0700f1"
  ]
}
*/