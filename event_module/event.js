// The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions
//  These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. 

const EventEmitter = require('events');
   
// Initializing event emitter instances 
var eventEmitter = new EventEmitter();
  
// Registering to myEvent 
eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
});
  
// Triggering myEvent
eventEmitter.emit('myEvent', "First event");