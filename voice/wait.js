var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Example for Basic Wait

app.all('/basic_wait/', function(request, resp) {
    var r = plivo.Response();

    r.addSpeak("I will wait for 10 seconds");
    var params = {
        'length' : "10"
    };
    r.addWait(params);
    r.addSpeak("I just waited 10 seconds");
    console.log (r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// Example for Delayed Call Answer

app.all('/delayed_wait/', function(request, resp) {
    var r = plivo.Response();

    var params = {
        'length' : "10"
    };
    r.addWait(params);
    r.addSpeak("Hello");
    console.log (r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// Example for Beep Detection

app.all('/beep_det/', function(request, resp) {
    var r = plivo.Response();

    var params = {
        'length' : "100",
        'beep' : 'true'
    };
    r.addWait(params);
    r.addSpeak("Hello");
    console.log (r.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output - Basic Wait
<Response>
    <Speak>I will wait for 10 seconds</Speak>
    <Wait length="10" />
    <Speak>I just waited 10 seconds</Speak>
</Response>

Sample Output - Delayed Call Answer
<Response>
    <Wait length="10" />
    <Speak>Hello</Speak>
</Response>

Sample Output - Beep Detection
<Response>
    <Wait length="10" beep="true"/>
    <Speak>Hello</Speak>
</Response>
*/