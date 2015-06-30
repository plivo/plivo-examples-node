var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Example for DTMF XML
// The DTMF element is used to send digits on a live call. 
// This will usually be used to automate the process of navigating through an external phone tree (IVR).

app.all('/dtmf/', function(request, response) {
    var r = plivo.Response();

    r.addSpeak("Sending Digits");
    r.addDTMF("12345");
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
    <Speak>Sending Digits</Speak>
    <DTMF>12345</DTMF>
</Response>
*/