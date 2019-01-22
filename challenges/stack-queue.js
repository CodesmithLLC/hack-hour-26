/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

    this.Stack = [];
    this.length = 0;
}
  
  Stack.prototype.push = function(val) {
    this.Stack[this.length] = val;
    this.length++;
  
    return val;
  }
  
  Stack.prototype.pop = function() {
    const lastVal = this.Stack[this.length - 1]
    const copy = this.Stack.slice(0, this.length - 1)
    this.Stack = copy
    this.length -= 1;
  
    return lastVal;
  }

  const myStack = new Stack()
  myStack.push(2)
  myStack.pop()

  console.log(myStack)

/**
* Queue Class
*/


function Queue() {
    this.Inbox = new Stack();
    this.Outbox = new Stack();

}

Queue.prototype.eneque = function(val) {
    this.Inbox.push(val)
}

Queue.prototype.dequeue = function() {
    let outboxArr = this.Inbox.Stack.reverse()

    this.Outbox.Stack = outboxArr
    this.Outbox.pop()

}

const myQueue = new Queue()
myQueue.eneque(1)
myQueue.eneque(2)
myQueue.eneque(3)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue.Outbox.Stack)


module.exports = {Stack: Stack, Queue: Queue};
