var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Speak XML with the details of the text to play on the call.

app.all('/speak/', function(request, response) {
    var r = plivo.Response();

    r.addSpeak('Congratulations! You did it!');
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
    <Speak>Congratulations! You did it!</Speak>
</Response>
*/