var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Hangup XML to reject an incoming call.

app.all('/hangup/', function(request, response) {
    var r = plivo.Response();
    var params = {
        'reason': 'busy', // Specify the reason for hangup
        'schedule': '60' // Schedule the hangup
    }

    r.addSpeak('This call will be hung up in 1 minute');
    r.addHangup(params);
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

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