var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: process.env.authId,
  authToken: process.env.authToken
});

var params = {
    'src': '1111111111', // Sender's phone number with country code
    'dst' : '2222222222', // Receiver's phone Number with country code
    // Your SMS Text Message - English
    'text' : "This randomly generated text can be used in your layout (webdesign , websites, books, posters ... ) for free. This text is entirely free of law. Feel free to link to this site by using the image below or by making a simple text link"
    // Your SMS Text Message - French
    // 'text' : "Ce texte généré aléatoirement peut-être utilisé dans vos maquettes (webdesign, sites internet,livres, affiches...) gratuitement. Ce texte est entièrement libre de droit. N'hésitez pas à faire un lien sur ce site en utilisant l'image ci-dessous ou en faisant un simple lien texte"
    // Your SMS Text Message - Japanese
    // 'text' : "このランダムに生成されたテキストは、自由のためのあなたのレイアウト（ウェブデザイン、ウェブサイト、書籍、ポスター...）で使用することができます。このテキストは、法律の完全に無料です。下の画像を使用して、または単純なテキストリンクを作ることで、このサイトへのリンクフリーです"
};

p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
    var uuid = response['message_uuid'];
    var params1 = {'record_id': uuid};
    p.get_message(params1, function(status, response1){
      console.log("Your SMS was split into " + response1['units'] + ' units');
    });
});

/* 
Sample Output

Status:  202
API Response:
 { api_id: 'b91b8736-134b-11e5-b0d7-22000ac520cd',
  message: 'message(s) queued',
  message_uuid: [ '138ee55f-9efb-4fc3-8ad7-4d71219bf56c' ] }

Output for Japanese
Your SMS was split into 3 units

Output for English
Your SMS was split into 2 units

Output for French
Your SMS was split into 5 units
*/