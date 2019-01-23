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
  let previousPointer, tail, newHead;
  // iterate to the end of the list and set a new head and new this.next
  while (this.value) {
     if (this.next === null) {
      previousPointer = this.value -= 1;
      this.next = this.value -= 1;
      tail = this.next;
      newHead = this.value;
     } else {
       // connect new next to 
       while (this.value) {
         previousPointer = this.value -= 1;
         this.next = this.value -= 1;
         tail = this.next;
         if (previousPointer === head) {
           // return the new list -- which variable is it saved at??
         }
       }
     }
   }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
