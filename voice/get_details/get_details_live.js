(function main() {
  'use strict';
  var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN")
  client.calls.listLiveCalls({
      to_number: "1111111111",
      from_number: "2222222222",
      call_direction: "outbound"
  }).then(function(response) {
      console.log(response);
  }, function(err) {
      console.error(err);
  });
})();

/*
Sample  Output

Status:  200
API Response:
 { api_id: '22cef816-5226-11e5-acf3-22000abfaafd',
  calls: 
   [ 'f033083e-5225-11e5-87e5-091a0ac416fa',
     'efff017e-5225-11e5-87d5-091a0ac416fa' ] }
*/