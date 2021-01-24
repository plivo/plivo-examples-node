var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate Dial XML

app.all('/dial/', function(request, resp) {
    var response = plivo.Response();

    var params = {
        'action': "https://www.foo.com/dial_status/", // Redirect to this URL after leaving Dial. 
        'method': "GET" // Submit to action URL using GET or POST.
    };
    var dial = response.addDial(params);

    var first_number = "1111111111";
    dial.addNumber(first_number);

    console.log(response.toXML());


    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// After completion of the call, Plivo will report back the status to the action URL in the Dial XML.

app.all('/dial_status/', function(request, response) {

    var status = request.params('DialStatus');
    var aleg = request.params('DialALegUUID');
    var bleg = request.params('DialBLegUUID');

    console.log('Status : ' + status + ' ALeg UUID : ' + aleg + ' BLeg UUID : ' + bleg);

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/*
Sample Output
<Response>
    <Dial action="https://www.foo.com/dial_status/" method="GET">
        <Number>1111111111</Number>
    </Dial>
</Response>

Status : completed, ALeg Uuid : 52bb0058-902d-11e4-9681-2d7d49a323a0, BLeg Uuid : 54f84290-902d-11e4-96df-2d7d49a323a0

*/