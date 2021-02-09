var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Example for DTMF XML
// The DTMF element is used to send digits on a live call. 
// This will usually be used to automate the process of navigating through an external phone tree (IVR).

app.all('/dtmf/', function(request, resp) {
    var response = plivo.Response();

    var speak_body = "Sending Digits";
    response.addSpeak(speak_body);

    var dtmf = "12345";
    response.addDTMF(dtmf);

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
    <Speak>Sending Digits</Speak>
    <DTMF>12345</DTMF>
</Response>
*/