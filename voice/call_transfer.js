var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/call_transfer/', function(request, response) {
    var r = plivo.Response();
   
    r.addSpeak('Please wait while your call is being transferred');
    r.addRedirect("https://intense-brook-8241.herokuapp.com/connect/");
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.all('/connect/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'action' : "https://intense-brook-8241.herokuapp.com/dial_status/",
        'method' : "5",
        'redirect' : "true"
    };
   
    r.addSpeak('Connecting your call');
    var d = r.addDial(params);
    d.addNumber("1111111111");
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
Sample output for Redirect XML
<Response>
    <Speak>Please wait while you call is being transferred</Speak>
    <Redirect>https://intense-brook-8241.herokuapp.com/connect/</Redirect>
</Response>

Sample output for Dial XML
<Response>
    <Speak>Connecting your call..</Speak>
    <Dial action="https://morning-ocean-4669.herokuapp.com/dial_status/" method="GET" redirect="true">
        <Number>1111111111</Number>
    </Dial>
</Response>
*/