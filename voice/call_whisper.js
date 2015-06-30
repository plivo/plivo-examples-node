var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/call_whisper/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'confirmSound' : "https://intense-brook-8241.herokuapp.com/confirm_sound/", // A remote URL fetched with POST HTTP request which must return an 
                                                                                    // XML response with Play, Wait and/or Speak elements only.
        'confirmKey' : "5" // The digit to be pressed by the called party to accept the call.
    };
    var d = r.addDial(params);
    d.addNumber("1111111111");
    d.addNumber("2222222222");
    d.addNumber("3333333333");   
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.all('/confirm_sound/', function(request, response) {
    var r = plivo.Response();
   
    r.addSpeak('Press 5 to answer the call');
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
    <Dial confirmSound="https://intense-brook-8241.herokuapp.com/confirm_sound/" confirmKey="5">
        <Number>1111111111</Number>
        <Number>2222222222</Number>
        <Number>3333333333</Number>
    </Dial>
</Response>

<Response>
    <Speak>Press 5 to answer the call</Speak>
</Response>
*/