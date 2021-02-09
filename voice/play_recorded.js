var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Play XML with the details of audio file to play during the call

app.all('/play/', function(request, resp) {

    var response = plivo.Response();

    var play_body = "https://s3.amazonaws.com/plivocloud/Trumpet.mp3";
    response.addPlay(play_body);

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
    <Play>https://s3.amazonaws.com/plivocloud/Trumpet.mp3</Play>
</Response>
*/