/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let result;
  let curr = head;
  let length = 0;
  while (curr !== null) {
    length += 1;
    curr = curr.next;
  }
  let stop = ((length - k) >= 0) ? (length - k) : (length - k) + length;
  // console.log(stop);
  curr = head;
  while (stop >= 0) {
    result = curr.value;
    curr = curr.next;
    stop -= 1;
  }
  return result;
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
console.log(kthToLastNode(3, a));
console.log(kthToLastNode(4, a));
console.log(kthToLastNode(5, a));
console.log(kthToLastNode(6, a));


module.exports = { Node, kthToLastNode };
