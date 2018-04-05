var express = require('express'); 
var app = express();


'use strict';

var Gpio = require('Gpio'),
  gpio,
  gpioNo;

for (gpioNo = Gpio.MIN_GPIO; gpioNo <= Gpio.MAX_GPIO; gpioNo += 1) {
  gpio = new Gpio(gpioNo);

  console.log('GPIO ' + gpioNo + ':' +
    ' mode=' + gpio.getMode() +
    ' level=' + gpio.digitalRead()
  );
}

/*
var gpio = require('rpi-gpio');
var buttonState;

gpio.setup(16, gpio.DIR_OUT);

app.on('stateChange', function(previousValue, value){
  console.log('button state changed from', previousValue, 'to', value);
});

setInterval(function(){
  gpio.read(16, function(err, value) {
    if(err){
      app.emit('error', err);
    } else{
      if(buttonState !== value){
        var previousState = buttonState;
        buttonState = value;
        app.emit('stateChange', previousState, value);
      }
    }        
  });
}, 50); //check button state every 50ms
*/