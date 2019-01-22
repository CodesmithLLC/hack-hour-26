/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

   this.stack = [];

   this.push = item => this.stack.push(item);

   this.top = () => {if(this.stack.length) return this.stack[this.stack.length-1] 
    else{return 0}};

   this.pop = () => {if(this.stack.length) return this.stack.pop()};

}


/**
* Queue Class
*/


function Queue() {

  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = item => {

    while(this.stack1.stack.length){
      this.stack2.push(this.stack1.pop());
    }

    // console.log(this.stack2.stack)

    this.stack1.push(item);

    while(this.stack2.stack.length){
      this.stack1.push(this.stack2.pop());
    }
  
  }

  this.dequeue = () => {

    if(this.stack1.stack.length){
      return this.stack1.stack.pop();
    }

  }

}

// let a = new Stack();
// a.push(1);
// a.push(2);
// a.push(3);
// console.log(a.pop());
// console.log(a.pop());

// console.log(a.pop());

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.stack1.stack, queue.stack2.stack);
// console.log(queue.dequeue());
// console.log(queue.stack1.stack, queue.stack2.stack);

module.exports = {Stack: Stack, Queue: Queue};
