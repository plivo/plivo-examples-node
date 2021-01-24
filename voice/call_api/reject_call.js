var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Hangup XML to reject an incoming call.

app.all('/hangup/', function(request, resp) {
    var response = plivo.Response();

    var speak_params = {
        'loop': "0"
    };
    var speak_body = "This call will be hung up after a minute";
    response.addSpeak(speak_body, speak_params);

    var params = {
        'schedule': "60",
        'reason': "rejected"
    };
    response.addHangup(params);

    console.log(response.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/*
Sample Output
<Response>
    <Speak>This call will be hung up in 1 minute</Speak>
    <Hangup reason="busy" schedule="60" />
</Response>
*/