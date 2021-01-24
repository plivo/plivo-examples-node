var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// This example calls out to a list of phone numbers sequentially. 
// The first call is made to the number in order, with a timeout value to 20s. 
// If the call is not answered within 20s, Plivo will then dial out to the second number.

app.all('/seq_dial/', function(request, resp) {

    var response = plivo.Response();

    var params = {
        'timeout': "20", // The duration (in seconds) for which the called party has to be given a ring.
        'action': "http://www.foo.com/dial_action" // Redirect to this URL after leaving Dial.
    };
    var first_dial = response.addDial(params);
    var first_number = "1111111111";
    first_dial.addNumber(first_number);

    var second_dial = response.addDial();
    var second_number = "2222222222";
    second_dial.addNumber(second_number);

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
    <Dial timeout="20" action="http://www.foo.com/dial_action">
        <Number>1111111111</Number>
    </Dial>
    <Dial>
        <Number>2222222222</Number>
    </Dial>
</Response>
*/