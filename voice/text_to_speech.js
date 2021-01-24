var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Generate a Speak XML with the details of the text to play on the call.

app.all('/text_to_speech/', function(request, resp) {

    var response = plivo.Response();

    var body1 = "This is English!";
    var params1 = {
        'language': "en-GB", // Language used to read out the text.
        'voice': "MAN" // The tone to be used for reading out the text.
    };
    response.addSpeak(body1, params1)

    var body2 = "Ce texte généré aléatoirement peut-être utilisé dans vos maquettes";
    var params2 = {
        'language': "fr-FR" // Language used to read out the text.
    };
    response.addSpeak(body2, params2)

    var body3 = "Это случайно сгенерированный текст может быть использован в макете";
    var params3 = {
        'language': "ru-RU", // Language used to read out the text.
        'voice': "MAN" // The tone to be used for reading out the text.
    };
    response.addSpeak(body3, params3)

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
    <Speak language="en-GB" voice="MAN">This is English!</Speak>
    <Speak language="fr-FR">Ce texte généré aléatoirement peut-être utilisé dans vos maquettes</Speak>
    <Speak language="ru-RU" voice="MAN">Это случайно сгенерированный текст может быть использован в макете</Speak>
</Response>
*/