/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = [];
  let index = 0;

  return {
    push: (element) => {
      if (index >= 0) {
        stack[index] = element;
        index += 1;
        return index;
      }
      return undefined;
    },
    pop: () => {
      if (index > 0) {
        index -= 1;
        const popped = stack.splice(index);
        return popped[0];
      }
      return undefined;
    },
    getMax: () => {
      if (index > 0) {
        let max = stack[0];
        stack.forEach((element) => {
          if (element > max) max = element;
        });
        return max;
      }
      return undefined;
    },
  };
}

module.exports = Stack;

const stack = new Stack();

// *** TESTING *** //
console.log('It can push items and return length');
console.log(`push('first') => 1 : ${stack.push('first')}`);
console.log(`push('second') => 2 : ${stack.push('second')}`);
console.log(`push('third') => 3 : ${stack.push('third')}`);

console.log('\nIt can pop the last item added back off the stack');
console.log(`pop() => 'third' : ${stack.pop()}`);
console.log(`pop() => 'second' : ${stack.pop()}`);

console.log('\nIt won\'t pop items off an empty stack');
console.log(`pop() => 'first' : ${stack.pop()}`);
console.log(`pop() => undefined : ${stack.pop()}`);

console.log('\nIt finds returns the value of the largest element currently in the stack');
stack.push(3);
stack.push(16);
stack.push(7);
stack.push(7);
stack.push(7);
stack.push(100);
stack.push(7);
stack.push(7);
stack.push(25);
console.log(`getMax() => 100 : ${stack.getMax()}`);
