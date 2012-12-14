var p = require('./plivo');
var p2 =  p.Response();

// Add Speak .....
var body = 'Welcome to Plivo';
var params = {'loop' : 2};

p2.addSpeak(body, params);

// Add Play .....
p2.addPlay('http://examples.com/playTrumpet.mp3', params);

// Add Wait .....
var params = {'length' : 3};

p2.addWait(params);

// To Generate XML.....
var xml = p2.toXML();

// To Print on console.....
console.log(xml);

/* 
Output : 
<Response>
  <Speak loop="2">Welcome to Plivo</Speak>
  <Play loop="2">http://examples.com/playTrumpet.mp3</Play>
  <Wait length="3">
    
  </Wait>
</Response>
*/ 
