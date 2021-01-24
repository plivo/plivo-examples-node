var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, response, next) {
    response.contentType('application/xml');
    next();
});
app.set('port', (process.env.PORT || 5000));
app.all('/delivery_report/', function(request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;
    //Message UUID
    var uuid = request.body.MessageUUID || request.query.MessageUUID;
    //Prints the message
    console.log('Message received - From: ' + from_number + ', To: ' + to_number + ', Text: ' + text + ', MessageUUID: ' + uuid);

    console.log('Delivery status reported');
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output

From: 1111111111, To: 3333333333, Status: queued, MessageUUID: 0936ec98-7c4c-11e4-9bd8-22000afa12b9

From: 1111111111, To: 3333333333, Status: sent, MessageUUID: 0936ec98-7c4c-11e4-9bd8-22000afa12b9

From: 1111111111, To: 3333333333, Status: delivered, MessageUUID: 0936ec98-7c4c-11e4-9bd8-22000afa12b9
*/