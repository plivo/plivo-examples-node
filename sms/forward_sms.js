var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/forward_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.param('From');
    // Receiver's phone number - Plivo number
    var to_number = request.param('To');
    // The text which was received
    var text = request.param('Text');

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Text : ' + text);

    var r = plivo.Response();
    var to_forward = '3333333333'

    var params = {
        'src' : to_number, // Sender's phone number
        'dst' : to_forward // Receiver's phone Number
    }

    r.addMessage(text, params);
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
From : 1111111111 To : 2222222222 Text : Hello
<Response>
    <Message src="2222222222" dst="3333333333">Hello</Message>
</Response>
*/