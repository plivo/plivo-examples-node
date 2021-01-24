var plivo = require('plivo');

(function main() {
    'use strict';
  
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");
    
    // Get details of all numbers
    client.numbers.list(
        {
            limit: 5,
            offset: 0,
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();

/*
Sample Output
{
  "api_id": "114de006-1c95-11e4-8a4a-123140008edf",
  "meta": {
    "limit": 3,
    "next": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Number/?limit=3&offset=3",
    "offset": 0,
    "previous": null,
    "total_count": 20
  },
  "objects": [{
      "number": "18135401302",
      "alias": null,
      "sub_account": null,
      "added_on": "2014-08-05",
      "application": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Application/29986316244302815/",
      "carrier": "Plivo",
      "region": "Florida, UNITED STATES",
      "number_type": "local",
      "monthly_rental_rate": "0.80000",
      "sms_enabled": true,
      "sms_rate": "0.00000",
      "voice_enabled": true,
      "voice_rate": "0.00850",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Number/18135401302/"
    },
    {
      "number": "14153661106",
      "alias": "",
      "sub_account": null,
      "added_on": "2013-01-01",
      "application": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Application/16632559604105954/",
      "carrier": "Plivo",
      "region": "BELVEDERE, UNITED STATES",
      "number_type": "local",
      "monthly_rental_rate": "0.80000",
      "sms_enabled": true,
      "sms_rate": "0.00000",
      "voice_enabled": true,
      "voice_rate": "0.00850",
      "resource_uri": "/v1/Account/MAXXXXXXXXXXXXXXXXXX/Number/14153661106/"
    }
  ]
}
*/