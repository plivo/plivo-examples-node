var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// When an outbound call is made and then connected different number using Dial element, 
// you can play a custom caller tone using the dialMusic attribute 

app.all('/dial/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'dialMusic' : "https://intense-brook-8241.herokuapp.com/custom_tone/" // Music to be played to the caller while the call is being connected.
    };
   
    var d = r.addDial(params);
    d.addNumber("1111111111");
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

// Play XML is returned on the dialMusic Url

app.all('/custom_tone/', function(request, response) {
    var r = plivo.Response();

    r.addPlay("https://s3.amazonaws.com/plivocloud/music.mp3");
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
    <Dial dialMusic="https://intense-brook-8241.herokuapp.com/custom_tone/">
        <Number>1111111111</Number>
    </Dial>
</Response> 

<Response>
    <Play>https://s3.amazonaws.com/plivocloud/music.mp3</Play>
</Response>

*/