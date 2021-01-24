var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("YOUR_AUTH_ID", "YOUR_AUTH_TOKEN");
    client.messages.create(
        "+14151113333", // Sender's phone number with country code
        "+14151112222", // Receiver's phone Number with country code
        // Your SMS Text Message - English
        "This randomly generated text can be used in your layout (webdesign , websites, books, posters ... ) for free. This text is entirely free of law. Feel free to link to this site by using the image below or by making a simple text link",
        // Your SMS Text Message - French
        // "Ce texte généré aléatoirement peut-être utilisé dans vos maquettes (webdesign, sites internet,livres, affiches...) gratuitement. Ce texte est entièrement libre de droit. N'hésitez pas à faire un lien sur ce site en utilisant l'image ci-dessous ou en faisant un simple lien texte"
        // Your SMS Text Message - Japanese
        // "このランダムに生成されたテキストは、自由のためのあなたのレイアウト（ウェブデザイン、ウェブサイト、書籍、ポスター...）で使用することができます。このテキストは、法律の完全に無料です。下の画像を使用して、または単純なテキストリンクを作ることで、このサイトへのリンクフリーです"
        {
            method: "GET", // Method used to trigger message URL.
            url: "http://foo.com/sms_status/" // The URL to which with the status of the message is sent
        },

    ).then(function(response) {
        console.log(response);
    }, );
})();

/* 
Sample Output
{ 
  api_id: 'b91b8736-134b-11e5-b0d7-22000ac520cd',
  message: 'message(s) queued',
  message_uuid: [ '138ee55f-9efb-4fc3-8ad7-4d71219bf56c' ] 
}
*/

client.messages.get(response.messageUuid).then(function(response) {
    //Prints only the unit
    console.log("Your SMS was split into " + response.units + ' units');
}, );

/* 
Sample Output

Output for Japanese
Your SMS was split into 3 units

Output for English
Your SMS was split into 2 units

Output for French
Your SMS was split into 5 units
*/