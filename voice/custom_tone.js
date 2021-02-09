var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// When an outbound call is made and then connected different number using Dial element, 
// you can play a custom caller tone using the dialMusic attribute 

app.all('/dial/', function(request, resp) {
    var response = plivo.Response();

    var params = {
        'dialMusic': "https://www.foo.com/custom_tone/"
    };
    var dial = response.addDial(params);

    var first_number = "1111111111";
    dial.addNumber(first_number);

    console.log(response.toXML());


    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

// Play XML is returned on the dialMusic Url

app.all('/custom_tone/', function(request, resp) {
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
    <Dial dialMusic="https://www.foo.com/custom_tone/">
        <Number>1111111111</Number>
    </Dial>
</Response>

<Response>
    <Play>https://s3.amazonaws.com/plivocloud/Trumpet.mp3</Play>
</Response>>

*/