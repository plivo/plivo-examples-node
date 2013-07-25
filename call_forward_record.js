var plivo = require('plivo-node');
var express = require('express');
var util = require('util');
var app = express();

app.use(express.bodyParser());

var server_name = 'server_address';

app.all('/forward/call', function (req, res) {
	if (req.method == 'POST')
		console.log(req.body);
	else
		console.log(req.query);
    var to_number = req.param('ForwardTo') || "";
	var from_number = req.param('From') || "";
	var call_record = req.param('CallRecord') || "";
    var response = plivo.Response();

	if (to_number && from_number) {
		if (call_record == 'true') {
			response.addRecord({action: util.format('http://%s/call/record', server_name ), startOnDialAnswer: 'true'});
		}
		var dial = response.addDial({callerId: from_number});
		dial.addNumber(to_number);
	}

    res.set({
        'Content-Type': 'text/xml'
    });
    res.end(response.toXML());

});

app.all('/call/record', function (req, res) {
	if (req.method == 'POST')
		console.log(req.body);
	else
		console.log(req.query);
    res.set({
        'Content-Type': 'text/plain'
    });
    res.end('OK');
	
});

app.listen(5000);
console.log('Listening on port 5000');
