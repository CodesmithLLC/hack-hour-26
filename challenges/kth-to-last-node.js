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

 /**
  * I: P1) int representing distance from last node, P2) head of LL
  * O: val at kth to last node in LL
  */

//console.log('kth!');

function Node(val) {
  this.value = val;
  this.next = null;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

function kthToLastNode(k, head) {
  let map = {};
  let count = 0;
  for (let i = this.head; i.next !== null; i = this.next) {
    count += 1;
    map[count] = this.value;
  }

  return map[k];
}

//module.exports = {Node: Node, kthToLastNode: kthToLastNode};
