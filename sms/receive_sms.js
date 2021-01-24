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
app.all('/receive_sms/', function (request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;
    //Print the message
    console.log('Message received - From: ' + from_number + ', To: ' + to_number + ', Text: ' + text);
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
Message received - From: 1111111111 To : 2222222222 Text : Hello
*/