var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Dial XML to forward an incoming call.

// The phone number of the person calling your Plivo number,
// we'll use this as the Caller ID when we forward the call.

app.all('/forward/', function(request, resp) {
    var response = plivo.Response();

    var from_number = request.params('From');

    // The number you would like to forward the call to.
    var forwarding_number = "2222222222";

    var params = {
        'callerId': from_number // The phone number to be used as the caller id. It can be set to the from_number or any custom number.
    };
    var dial = response.addDial(params);

    var first_number = forwarding_number;
    dial.addNumber(first_number);

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
    <Dial callerId="1111111111">
        <Number>2222222222</Number>
    </Dial>
</Response>
*/