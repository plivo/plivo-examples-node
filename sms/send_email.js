var plivo = require('plivo');
var express = require('express');
var nodemailer = require("nodemailer");
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/email_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.param('From');
    // Receiver's phone number - Plivo number
    var to_number = request.param('To');
    // The text which was received
    var text = request.param('Text');

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Text : ' + text);        

    var smtpTransport = nodemailer.createTransport("SMTP",{
       service: "Gmail",
       auth: {
           user: "Your mail address",
           pass: "Your Password"
       }
    });

    smtpTransport.sendMail({
    from: "From mail address", // sender address
    to: "To mail address", // comma separated list of receivers
    subject: "Testing sending using gmail", // Subject line
    text: text // plaintext body
    }, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    });

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
