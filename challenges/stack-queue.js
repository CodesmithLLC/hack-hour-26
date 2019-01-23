/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.storage = {};
    this.index = 0;
  };

  Stack.prototype.push = function(value) {
    let top = this.index;
    this.storage[top] = value;
    this.index += 1;
    return this.index;
  
  
  };
  
  Stack.prototype.pop = function() {
    if(this.index === 0){
      return undefined;
    }
    this.index = this.index -1
    let retval = this.storage[this.index];
    delete this.storage[this.index];
    return retval;
  
  };
/**
* Queue Class
*/


function Queue(stack1, stack2) {

};

Queue.prototype.enqueue = function(value) {
  this.stack1.push(value)
};

Queue.prototype.dequeue = function() {
    let value;

    while(this.stack1.index !== 0){
        this.stack2.push(this.stack1.pop());
    };
    value = this.stack2.pop();
    
    while(this.stack2.index !== 0){
        this.stack1.push(this.stack2.pop());
    }

    return value;
};

module.exports = {Stack: Stack, Queue: Queue};
