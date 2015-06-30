var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/reject_call/', function(request, response) {
    var blacklist = ['1111111111','2222222222'];
    // Sender's phone number
    var from_number = request.param('From');
    var r = plivo.Response();

    if ( blacklist.indexOf(from_number)==-1){
        var body = "Hello there";
        r.addSpeak(body); 
        
    }else{
        var params = {
            'reason': "rejected" //Specify the reason for hangup
        };
        r.addHangup(params);               
    }
    
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
Sample Output when From number is in blacklist
<Response>
    <Hangup reason="rejected"/>
</Response>
Sample Output when From number is not in blacklist
<Response>
    <Speak>Hello there</Speak>
</Response>
*/