var ee = new process.EventEmitter(),
    buttonState;

ee.on('stateChange', function(previousValue, value){
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
        ee.emit('stateChange', previousState, value);
      }
    }        
  });
}, 50); //check button state every 50ms