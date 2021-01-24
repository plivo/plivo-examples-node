var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Hangup XML to reject an incoming call.

app.all('/call_whisper/', function(request, resp) {
    var response = plivo.Response();

    var params = {
        'confirmSound': "https://www.foo.com/confirm_sound/",
        'confirmKey': "5"
    };
    var dial = response.addDial(params);

    var first_number = "1111111111";
    dial.addNumber(first_number);

    var second_number = "2222222222";
    dial.addNumber(second_number);

    var third_number = "3333333333";
    dial.addNumber(third_number);

    console.log(response.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.all('/confirm_sound/', function(request, response) {
    var r = plivo.Response();

    r.addSpeak('Press 5 to answer the call');
    console.log(r.toXML());

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
    <Dial confirmSound="https://www.foo.com/confirm_sound/" confirmKey="5">
        <Number>1111111111</Number>
        <Number>2222222222</Number>
        <Number>3333333333</Number>
    </Dial>
</Response>

<Response>
    <Speak>Press 5 to answer the call</Speak>
</Response>
*/