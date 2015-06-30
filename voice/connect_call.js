var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Dial XML with the details of the number to call

app.all('/connect_call/', function(request, response) {
    var r = plivo.Response();
   
    r.addSpeak('Connecting your call');
    var d = r.addDial();
    d.addNumber("2222222222");
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
    <Speak>Connecting your call</Speak>
    <Dial>
        <Number>2222222222</Number>
    </Dial>
</Response>
*/