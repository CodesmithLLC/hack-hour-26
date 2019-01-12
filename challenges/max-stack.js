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

    
    if(this.max<a){
      this.stack.push({val: a, max: a})
      this.max = a;
    }
    else{
      this.stack.push({val: a, max:this.max});
    }

    return this.stack.length;
  }

  this.pop = function(){
    if(this.stack.length>0){
      let popped = this.stack.pop();
      console.log('popped',popped);
      this.max = this.stack[this.stack.length-1].max;
      return popped;
    }
  }

  this.getMax = function(){
    if(this.stack.length ===0){
      return undefined
    }
    return this.stack[this.stack.length-1].max;
  }


}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
stack.push(100);
stack.pop();
console.log(stack.getMax());
stack.push(50);
console.log(stack.getMax());



module.exports = Stack;