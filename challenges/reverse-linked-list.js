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
  // check if head.next is null
  if (head.next === null) return head;
  // create three pointers, p1, p2 and p3
  let p1 = head;
  let p2 = head.next;
  let p3 = p2.next;

  while (true) {
    if (p2.next === null) {
      p2.next = p1;
      break;
    }
    p2.next = p1;
    p1 = p2;
    p2 = p3;
    p3 = p3.next;
  }
  //point head to null
  head.next = null;
  return p2;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;

console.log(reverseLinkedList(a));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
