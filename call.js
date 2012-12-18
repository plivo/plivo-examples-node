var p = require('./plivo');
var p1 =  p.RestAPI();

p1.options.authId = "xxxxxx";
p1.options.authToken = "xxxxxx";

var params = {};
params.from = "xxxxx";
params.to = "xxxxx";
params.answer_url = "http://somesite.com/answer_url.xml";

var json = JSON.stringify(params);

p1.make_call(params, function callback(err, response) {
    console.log(response.statusCode,response);
    console.log(err);
  }
);
