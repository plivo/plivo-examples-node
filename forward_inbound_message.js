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
    var src = req.param('From') || "";
    var txt = req.param('Text') || "";
    var r = plivo.Response();

    var params = {'src':src,'dst':dst};
    r.addMessage(txt, params);

    res.set({
        'Content-Type': 'text/xml'
    });
    res.end(r.toXML());

});

app.listen(5000);
console.log('Listening on port 5000');
