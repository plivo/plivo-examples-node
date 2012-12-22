var plivo = require('plivo');
var p = plivo.RestAPI(require('./config'));

var params = {};
params.from = "xxxxxxxxxx";
params.to = "xxxxxxxxxx";
params.answer_url = "http://somesite.com/answer_url.xml";

p.make_call(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
