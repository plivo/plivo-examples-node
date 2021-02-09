var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Dial XML with the details of the number to call

app.all('/connect_call/', function(request, resp) {
    var response = plivo.Response();

    var speak_body = "Connecting your call";
    response.addSpeak(speak_body);

    var params = {
        'dialMusic': "real"
    };
    var dial = response.addDial(params);

    var number = "1111111111";
    dial.addNumber(number);

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
    <Speak>Connecting your call</Speak>
    <Dial dialMusic="real">
        <Number>1111111111</Number>
    </Dial>
</Response>
*/