// Set te caller ID using Dial XML

var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Speak XML with the details of the text to play on the call.

app.all('/dial/', function(request, response) {
    var r = plivo.Response();

    var params = {
      'callerId' : "1111111111"
    }

    var number = "2222222222"

    var d = r.addDial(Params);
    d.addNumber(number);
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
    <Dial callerId="1111111111">
        <Number>2222222222</Number>
    </Dial>
</Response>
*/

// Set the caller ID using Call API

var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'to': '2222222222', // The phone numer to which the all has to be placed
    'from' : '1111111111', // The phone number to be used as the caller id
    'answer_url' : "https://intense-brook-8241.herokuapp.com/speak/", // The URL invoked by Plivo when the outbound call is answered
    'answer_method' : "GET", // The method used to call the answer_url
};

// Prints the complete response
p.make_call(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/* 
Sample Output

Status:  201
API Response:
 { api_id: 'f14cbe2a-3134-11e5-a541-22000afa85ca',
  message: 'call fired',
  request_uuid: 'ea90fbb2-b360-4b22-9ab0-0bef9a8e684b' }

*/
