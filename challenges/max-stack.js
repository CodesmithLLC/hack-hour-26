/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let arr = [];
  let value;
  let currentMax;
  let result;

  push(val){
    arr.push(val)
    value = val;
    result = this.arr.length;
  }

  pop(){
    result= this.arr.pop()
  }
  
  
  getMax(){
    if (!currentMax || value > currentMax){
      currentMax = value;
      result = currentMax;
    }
  }
  return result;
}

module.exports = Stack;