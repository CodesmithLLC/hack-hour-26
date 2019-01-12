/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.array = [];
}

Stack.prototype.push = function(element) {
  this.array[this.array.length] = element;
  console.log(this.array.length);
  return this.array.length;
}
  
Stack.prototype.pop = function() {
  let last = this.array[this.array.length - 1];
  this.array.splice(this.array.length - 1, 1);
  console.log(last);
  return last;
};
  
Stack.prototype.getMax = function() {
    for (let i = 0; i < this.array.length; i += 1){
      let max = this.array[0];
      if (max < this.array[i]) {
        max = this.array[i]
      }
      console.log(max);
      return max;
    }
};



module.exports = Stack;