/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max = 0
}

Stack.prototype.push = function(value) {
  let top = this.index;
  this.storage[top] = value;
  this.index += 1;
  if(value >= this.max){this.max = value;}
  return this.index;


};

Stack.prototype.pop = function() {
  if(this.index === 0){
    return undefined;
  }
  this.index = this.index -1
  let retval = this.storage[this.index];
  delete this.storage[this.index];
  if(retval === this.max){
    this.max = this.storage[0];
    for(let i = 1; i < this.index; i++){
      if(this.storage[i] > this.max){this.max = this.storage[i]};
    }
  }
  return retval;

};

Stack.prototype.getMax = function(){
  return this.max;

}

module.exports = Stack;