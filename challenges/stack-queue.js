/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    // a function that takes in functions and returns them in a first in last out order

    // if we treat like an array, push and pop

    const stack =[];

    Stack.prototype.push() = (onStack) => {
        stack[stack.length] = onStack; 
    }
    Stack.prototype.pop() = () => {
        let offStack = stack[stack.length];
        stack[stack.length] = stack.length-1;
        return offStack;
    }
    // return stack;
 
}



/**
* Queue Class
*/


function Queue() {
    // a function that takes in functions and returns them first in first out
    const queue = [];
    // if we treat like an array, push and shift
    Queue.prototype.push() = (onQueue) => {
        queue[queue.length] = onQueue; 
    }
    Queue.prototype.pop() = () => {
        let offQueue = queue[0];
        for(let i = 0; i < queue.length; i++){
            stack[i+1] = stack[i];
        }
        return offQueue;
    }

}

module.exports = {Stack: Stack, Queue: Queue};
