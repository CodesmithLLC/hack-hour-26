= new EventEmitter();
let counter = 0;
inst.on('increment', function () {
    counter++;
}); // counter should be 0
inst.trigger('increment'); // counter should be 1
console.log(counter);
inst.trigger('increment'); // counter should be 2
console.log(counter);