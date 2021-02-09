var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.all('/call_transfer/', function(request, resp) {
    var response = plivo.Response();

    var speak_body = "Please wait while you call is being transferred.";
    response.addSpeak(speak_body);

    var redirect_url = "https://www.foo.com/redirect/";
    response.addRedirect(redirect_url);

    console.log(response.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.all('/connect/', function(request, resp) {
    var response = plivo.Response();

    var params = {
        'dialMusic': "real"
    };
    var dial = response.addDial(params);

    var number = "1111111111";
    dial.addNumber(number);

    console.log(response.toXML());
    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample output for Redirect XML
<Response>
    <Speak>Please wait while you call is being transferred.</Speak>
    <Redirect>https://www.foo.com/redirect/</Redirect>
</Response>

Sample output for Dial XML
<Response>
    <Dial dialMusic="real">
        <Number>1111111111</Number>
    </Dial>
</Response>
*/