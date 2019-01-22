/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack(){
    this.stack = [];
    this.push = (element) => this.stack.push(element);
    this.pop = () => this.stack.pop();
}


/**
* Queue Class
*/


function Queue(element) {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.enqueue = (element) => {
        this.stack1.push(element);
        return this.stack1.stack;
    };

    this.dequeue = () => {
        if (this.stack2.stack.length === 0){
            if (this.stack1.stack.length === 0){ return "Cannot perform action. Queue is empty."}
            while (this.stack1.stack.length > 0){
                let temp = this.stack1.pop();
                this.stack2.push(temp);
            }
        }
        return this.stack2.pop();
    };

}

// Test your code
let line = new Queue;
console.log(line.enqueue(1));
console.log(line.enqueue(2));
console.log(line.enqueue("c"));
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());
console.log(line.dequeue());



module.exports = {Stack: Stack, Queue: Queue};
