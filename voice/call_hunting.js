var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Simultaneous dialing is useful when there are SIP users and numbers that you want to dial. 
// The first call that connects will cancel all other tries.

app.all('/call_hunting/', function(request, response) {
    var r = plivo.Response();

    var d = r.addDial();
    d.addUser("sip:abcd1234@phone.plivo.com");
    d.addNumber("2222222222");
    d.addNumber("3333333333");
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
<Response>
    <Dial>
        <User>sip:abcd1234@phone.plivo.com</User>
        <Number>2222222222</Number>
        <Number>3333333333</Number>
    </Dial>
</Response>
*/