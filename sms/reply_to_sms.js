var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/reply_to_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.param('From');
    // Receiver's phone number - Plivo number
    var to_number = request.param('To');
    // The text which was received
    var text = request.param('Text');

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Text : ' + text);

    var r = plivo.Response();

    var params = {
        'src' : to_number, // Sender's phone number
        'dst' : from_number // Receiver's phone Number
    }

    r.addMessage('Thank you for your message', params);
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
    <Message src="2222222222" dst="1111111111">Thank you for your message</Message>
</Response>
*/