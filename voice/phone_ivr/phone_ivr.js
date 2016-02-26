var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// This file will be played when a caller presses 2.
var PLIVO_SONG = "https://s3.amazonaws.com/plivocloud/music.mp3"

// This is the message that Plivo reads when the caller dials in
var IVR_MESSAGE1 = "Welcome to the Plivo IVR Demo App. Press 1 to listen to a pre recorded text in different languages.  \
                Press 2 to listen to a song."

var IVR_MESSAGE2 = "Press 1 for English. Press 2 for French. Press 3 for Russian"
// This is the message that Plivo reads when the caller does nothing at all
var NO_INPUT_MESSAGE = "Sorry, I didn't catch that. Please hangup and try again \
                    later."

// This is the message that Plivo reads when the caller inputs a wrong number.
var WRONG_INPUT_MESSAGE = "Sorry, it's wrong input."

app.all('/response/ivr/', function(request, response) {
    if(request.method == "GET"){
        var getdigits_action_url = "https://intense-brook-8241.herokuapp.com/response/ivr/"
        var r = plivo.Response();
        var params = {
            'action' : getdigits_action_url, // The URL to which the digits are sent
            'method' : 'POST', // Submit to action URL using GET or POST
            'timeout' : '7', // Time in seconds to wait to receive the first digit
            'numDigits' : '1', // Maximum number of digits to be processed in the current operation
            'retries' : '1' // Indicates the number of retries the user is allowed to input the digits
        }   
        var getdigits = r.addGetDigits(params);
        getdigits.addSpeak(IVR_MESSAGE1);
        r.addSpeak(NO_INPUT_MESSAGE)        
    } else {
        var digits = request.param('Digits');
        if (digit == "1"){
            var getdigits_action_url = "https://intense-brook-8241.herokuapp.com/response/tree/"
            var r = plivo.Response();
            var params = {
                'action' : getdigits_action_url, // The URL to which the digits are sent
                'method' : 'GET', // Submit to action URL using GET or POST
                'timeout' : '7', // Time in seconds to wait to receive the first digit
                'numDigits' : '1', // Maximum number of digits to be processed in the current operation
                'retries' : '1' // Indicates the number of retries the user is allowed to input the digits
            }   
            var getdigits = r.addGetDigits(params);
            getdigits.addSpeak(IVR_MESSAGE2);
            r.addSpeak(NO_INPUT_MESSAGE)            
        } else if (digit == "2"){
            r.addPlay(PLIVO_SONG);
        } else {
            r.addPlay(WRONG_INPUT_MESSAGE);
        }
    }    
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.all('/response/tree/', function(request, response) {
    var digits = request.param('Digits');
    var r = plivo.Response();

    if (digits == "1"){
            var text = "This message is being read out in English"
            var params = {
                'language': "en-GB"
            }
            r.addSpeak(text,params);
        } else if (digits == "2"){
            var text = "Ce message est lu en français"
            var params = {
                'language': "fr-FR"
            }
            r.addSpeak(text,params);
        } else if (digits == "3"){
            var text = "Это сообщение было прочитано в России"
            var params = {
                'language': "ru-RU"
            }
            r.addSpeak(text,params);
        }else {
            r.addPlay(WRONG_INPUT_MESSAGE);
        }

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
    <GetDigits action="https://intense-brook-8241.herokuapp.com/response/ivr" method="POST" numDigits="1" retries="1" timeout="7">
        <Speak>
            Welcome to the Plivo IVR Demo App. Press 1 to listen to a pre recorded text in different languages. Press 2 to listen to a song.
        </Speak>
    </GetDigits>
        <Speak>
            Sorry, I didnt catch that. Please hangup and try again later.
        </Speak>
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