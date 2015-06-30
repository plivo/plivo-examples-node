var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/greet_caller/', function(request, response) {
    var r = plivo.Response();

    var from_number = request.param('From');
    
    var callers = {
        "1111111111": "ABCDEF",
        "2222222222": "VWXYZ",
        "3333333333": "QWERTY"
    };
    
    if (callers[from_number]){
        var body = "Hello " + callers[from_number] ;        
    }else{
        var body = "Hello Stranger";
    }

    r.addSpeak(body);
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
    <Speak>Hello,ABCDEF</Speak>
</Response>
*/