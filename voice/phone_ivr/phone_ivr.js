var plivo = require('plivo');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('port', (process.env.PORT || 5000));

// This file will be played when a caller presses 2.
var PlivoSong = "https://s3.amazonaws.com/plivocloud/music.mp3";
// This is the message that Plivo reads when the caller dials in
var IvrMessage1 = "Welcome to the Plivo IVR Demo App. Press 1 to listen to a pre recorded text in different languages. Press 2 to listen to a song.";
var IvrMessage2 = "Press 1 for English. Press 2 for French. Press 3 for Russian";
// This is the message that Plivo reads when the caller does nothing at all
var NoinputMessage = "Sorry, I didn't catch that. Please hangup and try again later.";
// This is the message that Plivo reads when the caller inputs a wrong number.
var WronginputMessage = "Sorry, you've entered an invalid input.";

app.post('/ivr/', function(request, response) {
    var r = plivo.Response();
    var getinput_action_url, params, get_input;
    getinput_action_url = request.protocol + '://' + request.headers.host + '/ivr/firstbranch/';
    params = {
        'action': getinput_action_url,
        'method': 'POST',
        'inputType': 'dtmf',
        'digitEndTimeout': '5',
        'redirect': 'true',
    };
    get_input = r.addGetInput(params);
    get_input.addSpeak(IvrMessage1);
    r.addSpeak(NoinputMessage);

    console.log(r.toXML());
    response.set({
        'Content-Type': 'text/xml'
    });
    response.send(r.toXML());
});

app.post('/ivr/firstbranch/', function(request, response) {
    var r = plivo.Response();
    var getinput_action_url, params, get_input;
    var digit = request.body.Digits;
    console.log(digit);
    if (digit === '1') {
        getinput_action_url = request.protocol + '://' + request.headers.host + '/ivr/secondbranch/';
        params = {
            'action': getinput_action_url,
            'method': 'POST',
            'inputType': 'dtmf',
            'digitEndTimeout': '5',
            'redirect': 'true',
        };
        get_input = r.addGetInput(params);
        get_input.addSpeak(IvrMessage2);
        r.addSpeak(NoinputMessage);
    } else if (digit === '2') {
        r.addPlay(PlivoSong);
    } else {
        r.addSpeak(WronginputMessage);
    }

    console.log(r.toXML());
    response.set({
        'Content-Type': 'text/xml'
    });
    response.send(r.toXML());
});

app.all('/ivr/secondbranch/', function(request, response) {
    var r = plivo.Response();
    var text, params;
    var digit = request.body.Digits || request.query.Digits;
    if (digit === "1") {
        text = "This message is being read out in English";
        params = {
            'language': 'en-US'
        };
        r.addSpeak(text, params);
    } else if (digit === "2") {
        text = "Ce message est lu en français";
        params = {
            'language': 'fr-FR'
        };
        r.addSpeak(text, params);
    } else if (digit === "3") {
        text = "Это сообщение было прочитано в России";
        params = {
            'language': 'ru-RU'
        };
        r.addSpeak(text, params);
    } else {
        r.addSpeak(WronginputMessage);
    }

    console.log(r.toXML());
    response.set({
        'Content-Type': 'text/xml'
    });
    response.send(r.toXML());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/*
Sample Output
<Response>
	<GetDigits action="https://intense-brook-8241.herokuapp.com/response/ivr" method="POST" numDigits="1" retries="1" timeout="7">
		<Speak>
            Welcome to the Plivo IVR Demo App. Press 1 to listen to a pre recorded text in different languages. Press 2 to listen to a song.
        </Speak>
	</GetDigits>
	<Speak>Sorry, I didnt catch that. Please hangup and try again later.</Speak>
</Response>

If 1 is pressed, another menu is read out. Following is the generated Speak XML.
<Response>
	<GetDigits action="http://intense-brook-8241.herokuapp.com/response/tree/" method="POST" numDigits="1" retries="1" timeout="7">
		<Speak>Press 1 for English. Press 2 for French. Press 3 for Russian</Speak>
	</GetDigits>
	<Speak>Sorry, I didn't catch that. Please hangup and try again later.</Speak>
</Response>

If 1 is pressed, the English text is read out. Following is the generated Speak XML.
<Response>
	<Speak language="en-GB">This message is being read out in English</Speak>
</Response>

If 2 is pressed, the French text is read out. Following is the generated Speak XML.
<Response>
	<Speak language="fr-FR">Ce message est lu en fran&amp;#231;ais</Speak>
</Response>

If 3 is pressed, the Russian text is read out. Following is the generated Speak XML.
<Response>
	<Speak language="ru-RU">Это сообщение было прочитано в России</Speak>
</Response>

If 2 is pressed, a music is played. Following is the generated Play XML.
<Response>
	<Play>https://s3.amazonaws.com/plivocloud/music.mp3</Play>
</Response> 
*/