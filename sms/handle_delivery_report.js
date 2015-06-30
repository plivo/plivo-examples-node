var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/report/', function(request, response) {
    // Sender's phone number
    var from_number = request.param('From');
    // Receiver's phone number - Plivo number
    var to_number = request.param('To');
    // Status of the message
    var status = request.param('Status');
    // Prints the status and messageuuid
    var uuid = request.param('MessageUUID');

    console.log ('From : ' + from_number + ' To : ' + to_number + ' Status : ' + status + ' MessageUUID : ' + uuid);

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output

From : 1111111111 To : 2222222222 Status : queued MessageUUID : e4ba764f-517e-4546-8e3f-a08ed1f2a59b
From : 1111111111 To : 2222222222 Status : sent MessageUUID : e4ba764f-517e-4546-8e3f-a08ed1f2a59b
From : 1111111111 To : 2222222222 Status : delivered MessageUUID : e4ba764f-517e-4546-8e3f-a08ed1f2a59b
*/