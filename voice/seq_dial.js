var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// This example calls out to a list of phone numbers sequentially. 
// The first call is made to the number in order, with a timeout value to 20s. 
// If the call is not answered within 20s, Plivo will then dial out to the second number.

app.all('/seq_dial/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'timeout' : "20", // The duration (in seconds) for which the called party has to be given a ring.
        'action':"hhttps://intense-brook-8241.herokuapp.com/dial_status/" // Redirect to this URL after leaving Dial.
    }

    var d = r.addDial(params);
    d.addNumber("1111111111");

    var d2 = r.addDial()
    d2.addNumber("2222222222");

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
    <Dial action="https://morning-ocean-4669.herokuapp.com/dial_status/" timeout="20">
        <Number>1111111111</Number>
    </Dial>
    <Dial>
        <Number>2222222222</Number>
    </Dial>
</Response>
*/