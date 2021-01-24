var plivo = require('plivo');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, response, next) {
    response.contentType('application/xml');
    next();
});
app.set('port', (process.env.PORT || 5000));
app.all('/reply_sms/', function (request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;
    // Print the message
    console.log('Message received - From: ' + from_number + ', To: ' + to_number + ', Text: ' + text); 

    //send the details to generate an XML
    var r = plivo.Response();
    var params = {
        'src': to_number, //Sender's phone number
        'dst': from_number, //Receiver's phone Number
        'type': "sms",
        'callbackUrl': "https://www.foo.com/sms_status",
        'callbackMethod': "POST"
    };
    var message_body = "Thank you, we have received your request"; //The text to be sent
    r.addMessage(message_body, params);
    console.log(r.toXML()); //Prints the XML
    response.end(r.toXML()); //Returns the XML
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
From : 1111111111 To : 2222222222 Text : Hello
<Response>
    <Message src="2222222222" dst="1111111111">Thank you for your message</Message>
</Response>
*/