var plivo = require('plivo'); // npm install plivo
var express = require('express'); // Utilizes Express 4. npm install express
var bodyParser = require("body-parser"); // Body parsing middleware. npm install body-parser
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.all('/receive_sms/', function(req, res) {
    
	// Sender's phone number
    var from_number = req.body['From'];
    // Receiver's phone number - Plivo number
    var to_number = req.body['To'];
    // The text which was received
    var text = req.body['Text'];

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Text : ' + text);

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
From : 1111111111 To : 2222222222 Text : Hello
*/
