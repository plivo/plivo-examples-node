var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('port', (process.env.PORT || 5000));
app.all('/email_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;
    // Print the message
    console.log('Message received from: ' + from_number + ': ' + text);

    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "Your email address",
            pass: "Your password"
        }
    });

    smtpTransport.sendMail({
        from: "From email address", // sender address
        to: "To email address", // comma separated list of receivers
        subject: "SMS from " + from_number, // Subject line
        text: text // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});