var plivo = require('plivo');
var express = require('express');
var app = express();

app.use(express.bodyParser());

app.all('/forward/call/', function (req, res) {
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
			response.addRecord('', {action: 'http://server/path/to/url', startOnDialAnswer: 'true'});
		}
		var dial = response.addDial({callerId: from_number});
		dial.addNumber(to_number);
	}

    res.set({
        'Content-Type': 'text/xml'
    });
    res.end(response.toXML());

});

app.listen(5000);
console.log('Listening on port 5000');
