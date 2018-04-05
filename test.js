var express = require('express'); 
var app = express();

/*
var Gpio = require('pigpio').Gpio,
  led = new Gpio(17, {mode: Gpio.OUTPUT}),
  dutyCycle = 0;

setInterval(function () {
  led.pwmWrite(dutyCycle);
  console.log('led change')
  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);
*/

var Gpio = require('pigpio').Gpio,
  button = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  led = new Gpio(17, {mode: Gpio.OUTPUT});

button.on('interrupt', function (level) {
  led.digitalWrite(level);
  console.lod(level);
});

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