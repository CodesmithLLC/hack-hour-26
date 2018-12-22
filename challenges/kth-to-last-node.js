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
  // loop over each value of the linked list, storing the values in an array
  let currentNode = head;
  const values = [];
  while (currentNode !== null) {
    values.push(currentNode.value);
    currentNode = currentNode.next
  }
  // return the kth to last element of the array
  return values[values.length - k];
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
