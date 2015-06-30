var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate Dial XML

app.all('/dial/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'action' : "https://intense-brook-8241.herokuapp.com/dial_status/", // Redirect to this URL after leaving Dial. 
        'method' : "GET" // Submit to action URL using GET or POST.
    };
   
    r.addSpeak("Connecting your call..");
    var d = r.addDial(params);
    d.addNumber("1111111111");
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

// After completion of the call, Plivo will report back the status to the action URL in the Dial XML.

app.all('/dial_status/', function(request, response) {
    
    var status = request.param('DialStatus');    
    var aleg = request.param('DialALegUUID');
    var bleg = request.param('DialBLegUUID');

    console.log ('Status : ' + status + ' ALeg UUID : ' + aleg + ' BLeg UUID : ' + bleg);

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Speak>Connecting your call..</Speak>
    <Dial action="https://intense-brook-8241.herokuapp.com/dial_status/" method="GET">
        <Number>1111111111</Number>
    </Dial>
</Response>

Status : completed, ALeg Uuid : 52bb0058-902d-11e4-9681-2d7d49a323a0, BLeg Uuid : 54f84290-902d-11e4-96df-2d7d49a323a0

*/