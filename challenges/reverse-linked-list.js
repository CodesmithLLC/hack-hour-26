/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    // find the tail of the link list
    let current = head.value;
    let next = current.next;
    console.log('Current is: ', current);
    console.log('Next is: ', next);
    while (next){
        console.log(current)
    }



}


// Test your code

let list = {
    value: 7,
    next: {
        value: 8,
        next: {
            value: 9,
            next:{}
        }
    }
};

reverseLinkedList(list);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
