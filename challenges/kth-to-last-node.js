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

//input: two parameters - an integer identifying index position of node and the head of linked list; 
//output: returns the node value of the node that is positioned at final node - identified node

//use Object.values to access value

function kthToLastNode(k, head) {
//let tail = head.next; this will re-assign head to the next node; how to get tail to reference the final node in the list? 
//when value of tail === null i.e. when tail is pointing to null then return Object.values(tail) to get the value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
