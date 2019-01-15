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
    if(!head) {return null;}
    const linkedList = [];
    let pointer = head;

    while(pointer){
        linkedList.push(pointer)
        pointer = pointer.next;
    }

    for(let i = linkedList.length-1; i >= 0; i-- ){
        linkedList[i].next = linkedList[i-1];
    }
    linkedList[0].next = null;
    return linkedList[linkedList.length-1];

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
