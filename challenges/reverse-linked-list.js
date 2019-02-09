/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
// console.log('reverse linked list!');

function Node(value) {
  this.value = value;
  this.next = null;
}

// nextNext - two forward
// lastLast - two back
// head

function reverseLinkedList(head) {
  let curr = head;
  let pointer1;
  let pointer2;
  let twoForward;
  // iterate while current node's next still points to something
  while (curr) {
    pointer1 = curr;
    pointer2 = curr.next.next;
    curr = head.next;
    head = head.next;
  }
      //

}

// module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
