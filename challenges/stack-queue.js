/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const stack = [];
  let index = 0;

  return {
    push: (element) => {
      stack[index] = element;
      index += 1;
    },
    pop: () => {
      if (index === 0) return undefined;
      index -= 1;
      const popped = stack.splice(index);
      return popped[0];
    },
    length: () => index,
  };
}


/**
* Queue Class
*/


function Queue() {
  const temp = Stack();
  const output = Stack();


  return {
    enqueue: (element) => {
      // shift all elements from output to temp
      for (let i = output.length(); i > 0; i -= 1) {
        const shifted = output.pop();
        temp.push(shifted);
      }

      // once output.length() === 0, push element onto output stack
      output.push(element);

      // shift items back to output from temp
      for (let i = temp.length(); i > 0; i -= 1) {
        const shifted = temp.pop();
        output.push(shifted);
      }
    },
    dequeue: () => output.pop(),
    length: () => output.length(),
  };
}

module.exports = { Stack, Queue };

// const testStack = Stack();

// testStack.push('a');
// testStack.push('b');
// testStack.push('c');
// testStack.push('d');

// console.log('length = 4? :', testStack.length());
// testStack.pop();
// testStack.pop();
// testStack.pop();
// console.log('expect a:', testStack.pop());
// console.log('expect undefined:', testStack.pop());
// console.log('expect 0:', testStack.length());

// const q = Queue();

// q.add('a');
// q.add('b');
// q.add('c');
// q.add('d');

// console.log('expect 4:', q.length());
// console.log('expect a:', q.remove());
// console.log('expect b:', q.remove());
// console.log('expect c:', q.remove());
// console.log('expect 1:', q.length());
