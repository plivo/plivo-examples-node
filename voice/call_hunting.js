var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Simultaneous dialing is useful when there are SIP users and numbers that you want to dial. 
// The first call that connects will cancel all other tries.

app.all('/call_hunting/', function(request, resp) {
    var response = plivo.Response();

    var dial = response.addDial();

    var first_user = "sip:alice1234@phone.plivo.com";
    dial.addUser(first_user);

    var number = "1111111111";
    dial.addNumber(number);

    var second_user = "sip:john1234@phone.plivo.com";
    dial.addUser(second_user);

    console.log(response.toXML());

    resp.setHeader("Content-Type", "text/xml");
    resp.end(response.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Dial>
        <User>sip:alice1234@phone.plivo.com</User>
        <Number>1111111111</Number>
        <User>sip:john1234@phone.plivo.com</User>
    </Dial>
</Response>
*/