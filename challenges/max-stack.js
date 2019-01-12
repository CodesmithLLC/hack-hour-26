/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.max = Number.MIN_SAFE_INTEGER;
  this.stack = [];

  this.push = function(a){
    this.stack.push(a);

    if(this.max<a){
      this.max = a;
    }

    return this.stack.length;
  }

  this.pop = function(){
    if(this.stack.length>0){
      this.stack.pop();
    }
  }

  this.getMax = function(){
    return this.max;
  }


}

// let stack = new Stack();
// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(3));
// console.log(stack.getMax())

module.exports = Stack;