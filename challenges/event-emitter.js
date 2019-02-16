'use strict';
/**
 * Make an EventEmitter.
 *

 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
}

EventEmitter.prototype.on = function(funcName, func) {
    if (!this[funcName]){
        this[funcName] = [func];
    }
    else {
        this[funcName].push(func)
    }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    this[funcName].forEach((func) => {
        func(...args);
    });
};

// Test your code
let instance = new EventEmitter();
let counter = 0;

instance.on('increment', function() {
  counter++;
}); // counter should be 0
console.log("Counter should be 0. It is: ", counter)

instance.trigger('increment'); // counter should be 1
console.log("Counter should be 1. It is: ", counter)

instance.trigger('increment'); // counter should be 2
console.log("Counter should be 2. It is: ", counter)


module.exports = EventEmitter;
