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

let prevNode = null;
let currNext = null;

function reverseLinkedList(head) {


    
    if(head.next === null){
        head.next = prevNode;
        return head;
    }

    // STEP 1: save the curent next to keep going
    currNext = head.next;

    // STEP 2: set the current head to the previous node
    head.next = prevNode;

    // STEP 3: set prevNode equal to current

    prevNode = head;


    // STEP 4: move forard in the linked list
    return reverseLinkedList(currNext);



}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
