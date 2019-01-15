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
  if (head === null) return head;
  let p = head;
  let c = head.next;
  if (head.next === null) return head;
  head.next = null;
  while (c !== null) {
    p = head;
    head = c;
    c = head.next;
    head.next = p;
  }
  return head;
}

module.exports = { Node, reverseLinkedList };

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);


// one.next = two;
// two.next = three;

// console.log(reverseLinkedList(one));
