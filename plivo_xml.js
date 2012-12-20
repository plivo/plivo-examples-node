var plivo = require('plivo');
var r = plivo.Response();

// Add Speak
var body = 'Welcome to Plivo';
var params = {'loop' : 2};

r.addSpeak(body, params);

// Add Play
r.addPlay('http://examples.com/playTrumpet.mp3', params);

// Add Wait
var params = {'length' : 3};
r.addWait(params);

// Add Dial
var dialElement = r.addDial({
    action: 'http://yourapp.com/dial',
});


// Add Number and User to previously added Dial
dialElement.addNumber('107456967856');
dialElement.addUser('sip:user1234@phone.plivo.com');
dialElement.addNumber('107456967856');

// Generate XML String
var xml = r.toXML();

// Print to console
console.log(xml);

/* 

Output: 

<Response>
  <Speak loop="2">Welcome to Plivo</Speak>
  <Play loop="2">http://examples.com/playTrumpet.mp3</Play>
  <Wait length="3"/>
  <Dial action="http://yourapp.com/dial">
    <Number>107456967856</Number>
    <User>sip:user1234@phone.plivo.com</User>
    <Number>107456967856</Number>
  </Dial>
</Response>

*/ 
