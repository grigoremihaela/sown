var express = require('express'); 
var app = express();
var gpio = require('rpi-gpio');
var buttonState;

app.on('stateChange', function(previousValue, value){
  console.log('button state changed from', previousValue, 'to', value);
});

setInterval(function(){
  gpio.read(16, function(err, value) {
    if(err){
      ee.emit('error', err);
    } else{
      if(buttonState !== value){
        var previousState = buttonState;
        buttonState = value;
        app.emit('stateChange', previousState, value);
      }
    }        
  });
}, 50); //check button state every 50ms