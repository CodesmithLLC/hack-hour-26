/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.content = [];
    this.length = 0;
}

Stack.prototype.push = function (x) {
    this.content.push(x);
    this.length += 1;
}
Stack.prototype.pop = function () {
    this.length -= 1;
    return this.content.pop();
}

/**
* Queue Class
*/


function Queue() {
    this.stackA = new Stack();
    this.stackB = new Stack();
}

Queue.prototype.enqueue = function (x) {
    const elements = this.stackA.length;
    for (let i = 0; i < elements; i++) {
        this.stackB.push(this.stackA.pop());
    }
    this.stackA.push(x);
    for (let i = 0; i < elements; i++) {
        this.stackA.push(this.stackB.pop());
    }
}

Queue.prototype.dequeue = function () {
    return this.stackA.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
