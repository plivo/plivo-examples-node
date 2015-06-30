var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/receive_sms/', function(request, response) {
    // Sender's phone number
    var from_number = request.param('From');
    // Receiver's phone number - Plivo number
    var to_number = request.param('To');
    // The text which was received
    var text = request.param('Text');

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Text : ' + text);

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
From : 1111111111 To : 2222222222 Text : Hello
*/