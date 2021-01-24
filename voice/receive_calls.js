var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Speak XML with the details of the text to play on the call.

app.all('/speak/', function(request, resp) {

    var response = plivo.Response();

    var speak_body = "Congratulations! You did it!";
    response.addSpeak(speak_body);

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
    <Speak>Congratulations! You did it!</Speak>
</Response>
*/