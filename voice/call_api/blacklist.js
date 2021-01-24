var plivo = require('plivo');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));

app.all('/screen_call/', function(request, response) {
    var blacklist = [ '14156667777', '14156667778', '14156667779'];
    // Get the caller's phone number from the 'From' parameter
    var from_number = request.query.From || request.body.From;
    var r = plivo.Response();
    if (blacklist.indexOf(from_number) === -1){
        var body = "Hello, how are you today";
        r.addSpeak(body);
    } else {
        //Specify the reason for hangup

        var params = {'reason': "rejected"};
        r.addHangup(params);
    }
    console.log (r.toXML());
    response.set({'Content-Type': 'text/xml'});
    response.send(r.toXML());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output when From number is in blacklist
<Response>
    <Hangup reason="rejected"/>
</Response>

Sample Output when From number is not in blacklist
<Response>
    <Speak>Hello, how are you today</Speak>
</Response>
*/