var plivo = require('plivo');

(function main() {
    'use strict';
  
    var client = new plivo.Client("YOUR_AUTH_ID","YOUR_AUTH_TOKEN");
    client.pricings.get(
        "GB", // The 2 digit country ISO code.
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();
/*
Sample Output
{
    "api_id": "22446e00-5985-11eb-b3d6-0242ac110004",
    "country": "United Kingdom",
    "country_code": 44,
    "country_iso": "GB",
    "message": {
        "inbound": {
            "rate": "0.00000"
        },
        "outbound": {
            "rate": "0.02650"
        },
        "outbound_networks_list": [
            {
                "group_name": " United Kingdom-Landline",
                "rate": "0.02650"
            },
            {
                "group_name": "Lycamobile UK",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Airwave Solutions",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - BT (Mcom)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Cloud9 Communications",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Everything Everywhere (T-Mobile)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - FleXtel",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - HAY SYSTEMS",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Hutchison 3G UK",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - JSC Ingenium (UK)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Jersey Airtel",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Jersey Telecom",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Limitless Mobile",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Lleida.net Serveis Telematics",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Manx Telecom",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Marathon Telecom",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Mundio Mobile (Mcom)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Orange",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Other Networks",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - SSE Energy Supply",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Stour Marine",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Sure (Guernsey) Limited",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Synectiv",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - TalkTalk Communications ( Vodafone)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - TeleWare",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Telefonica UK (O2 UK)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Telesign Mobile (Routo Telecom)",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Tismi BV",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Truphone",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - UK Broadband Limited",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom - Vodafone",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom-O2",
                "rate": "0.02650"
            },
            {
                "group_name": "United Kingdom-T Mobile",
                "rate": "0.02650"
            },
            {
                "group_name": "Virgin Mobile Telecoms",
                "rate": "0.02650"
            }
        ]
    },
    "mms": {
        "inbound": {
            "rate": null
        },
        "outbound": {
            "rate": null
        },
        "outbound_networks_list": []
    },
    "phone_numbers": {
        "local": {
            "rate": "0.72250",
            "rates": [
                {
                    "capabilities": [
                        "voice"
                    ],
                    "rental_rate": "0.72250",
                    "setup_rate": "0.00000"
                },
                {
                    "capabilities": [
                        "sms",
                        "voice"
                    ],
                    "rental_rate": "0.72250",
                    "setup_rate": "0.00000"
                }
            ]
        },
        "mobile": {
            "rate": "0.72250",
            "rates": [
                {
                    "capabilities": [
                        "sms",
                        "voice"
                    ],
                    "rental_rate": "0.72250",
                    "setup_rate": "0.00000"
                }
            ]
        },
        "tollfree": {
            "rate": "1.44000",
            "rates": [
                {
                    "capabilities": [
                        "voice"
                    ],
                    "rental_rate": "1.44000",
                    "setup_rate": "0.00000"
                }
            ]
        }
    },
    "voice": {
        "inbound": {
            "ip": {
                "rate": "0.00180"
            },
            "local": {
                "rate": "0.00722"
            },
            "tollfree": {
                "rate": "0.04160"
            }
        },
        "outbound": {
            "ip": {
                "rate": "0.00180"
            },
            "local": {
                "rate": "0.01318"
            },
            "rates": [
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "4474582"
                    ],
                    "rate": "0.44200"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "4487",
                        "449"
                    ],
                    "rate": "0.27200"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "44"
                    ],
                    "rate": "0.01318"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "44710",
                        "447300",
                        "447301",
                        "447302",
                        "447303",
                        "447304",
                        "44734",
                        "44737",
                        "447380",
                        "447381",
                        "447382",
                        "447387",
                        "447388",
                        "4473890",
                        "4473891",
                        "44739",
                        "447400",
                        "447401",
                        "447402",
                        "447403",
                        "447407",
                        "447409",
                        "44741",
                        "4474170",
                        "4474180",
                        "44742",
                        "44743",
                        "44744",
                        "4474416",
                        "44745",
                        "4474527",
                        "4474528",
                        "4474529",
                        "4474586",
                        "4474589",
                        "44746",
                        "4474652",
                        "4474654",
                        "4474656",
                        "4474657",
                        "4474658",
                        "4474659",
                        "44747",
                        "44748",
                        "4474884",
                        "4474885",
                        "4474887",
                        "4474889",
                        "44749",
                        "44750",
                        "44751",
                        "44752",
                        "44753",
                        "4475320",
                        "4475321",
                        "4475322",
                        "4475323",
                        "4475324",
                        "4475326",
                        "4475327",
                        "4475328",
                        "4475374",
                        "4475378",
                        "4475379",
                        "44754",
                        "44755",
                        "44756",
                        "44757",
                        "44758",
                        "44759",
                        "44770",
                        "44771",
                        "44772",
                        "44773",
                        "44774",
                        "44775",
                        "44776",
                        "44777",
                        "44778",
                        "44779",
                        "44780",
                        "44781",
                        "44782",
                        "4478228",
                        "44783",
                        "44784",
                        "44785",
                        "44786",
                        "44787",
                        "4478720",
                        "4478721",
                        "4478723",
                        "4478724",
                        "4478725",
                        "4478726",
                        "4478728",
                        "4478729",
                        "44788",
                        "44789",
                        "4478932",
                        "4478934",
                        "4478935",
                        "4478936",
                        "4478937",
                        "44790",
                        "44791",
                        "44792",
                        "44793",
                        "44794",
                        "44795",
                        "44796",
                        "44797",
                        "44798",
                        "44799"
                    ],
                    "rate": "0.02040"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "44730",
                        "44736",
                        "4473780",
                        "44738",
                        "4473800",
                        "4473900",
                        "4473974",
                        "44740",
                        "447417",
                        "447418",
                        "447424",
                        "447438",
                        "447439",
                        "447440",
                        "447441",
                        "447448",
                        "447451",
                        "447452",
                        "447457",
                        "447458",
                        "447459",
                        "447465",
                        "447466",
                        "447488",
                        "447509",
                        "447520",
                        "447532",
                        "447537",
                        "447558",
                        "447559",
                        "447571",
                        "447589",
                        "44760",
                        "44762",
                        "4476606",
                        "4476660",
                        "4476770",
                        "447691",
                        "4477",
                        "447700",
                        "447744",
                        "447753",
                        "447755",
                        "447777",
                        "447781",
                        "447797",
                        "4478",
                        "447822",
                        "447829",
                        "447839",
                        "447872",
                        "4478744",
                        "447893",
                        "4479",
                        "447911",
                        "447924",
                        "447937",
                        "447978"
                    ],
                    "rate": "0.25500"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "443",
                        "445",
                        "4484"
                    ],
                    "rate": "0.02720"
                },
                {
                    "origination_prefix": [
                        ""
                    ],
                    "prefix": [
                        "4470",
                        "4474410"
                    ],
                    "rate": "0.40800"
                }
            ],
            "tollfree": {
                "rate": null
            }
        }
    }
}
*/