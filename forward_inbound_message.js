var plivo = require('plivo');
var express = require('express');
var app = express();

app.use(express.bodyParser());

app.all('/forward/message/', function (req, res) {
	if (req.method == 'POST')
		console.log(req.body);
	else
		console.log(req.query);
    var dst = req.param('ForwardTo') || "";
	var from = req.param('From') || "";
	// Custom CLID is not allowed, so use Plivo DID instead.
    var src = req.param('To') || "";
    var txt = req.param('Text') || "";
    var r = plivo.Response();

	// Generate an XML response with <Message> tag, only if,
	// all the mandatory attributes are available.
	if (dst && src && txt) {
		var params = {'src':src,'dst':dst};
		r.addMessage('Message from ' + from + ': ' + txt, params);
	}

    res.set({
        'Content-Type': 'text/xml'
    });
    res.end(r.toXML());

});

app.listen(5000);
console.log('Listening on port 5000');
