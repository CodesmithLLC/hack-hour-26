'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
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

  this.events = {};

}

EventEmitter.prototype.on = function(funcName, func) {

  if(!this.events[funcName]) {
    this.events[funcName] = [];
    this.events[funcName].push(func);
  }

  else {
    this.events[funcName].push(func);
  }


};

EventEmitter.prototype.trigger = function(funcName, ...args) {

  if(this.events[funcName]){

    for(let i=0; i< this.events[funcName].length; i++){
      this.events[funcName][i](...args);
    }

  }

};

// let a = new EventEmitter();
// let counter = 0;
// // console.log(counter);

// a.on('increment', function() {
//   counter++;
// })

// a.on('log', function(word) {
//   console.log('log1 fired:',word);
// })

// a.on('log',function(number){
//   console.log('log2 fired: ',number + number);
// })

// console.log(counter);
// a.trigger('increment');
// console.log(counter);
// a.trigger('log',5);


module.exports = EventEmitter;
