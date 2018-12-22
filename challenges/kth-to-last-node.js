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
  if (k < 1) return;
  const values = [];
  let currentNode = head;
  // traverse the list, storing values of each node in an array
  while (currentNode.next) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }
  // the loop exits before the value of the tail is pushed, so do that next
  values.push(currentNode.value);

  // once the end is reached, grab length and calculate the index in the array of the kth item (length - k)
  const { length } = values;

  // check if k is going to be greater than or equal the length
  if (k > length) return undefined;

  // return kth item
  return values[length - k];
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E - I\'m last!');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;


// console.log('k = 0, expect undefined, actual:', kthToLastNode(0, a));
// console.log('k = 1, expect E - I\'m last!, actual:', kthToLastNode(1, a));
// console.log('k = 2, expect D, actual:', kthToLastNode(2, a));
// console.log('k = list length, expect A, actual:', kthToLastNode(5, a));
// console.log('k = list length + 1, expect undefined, actual:', kthToLastNode(6, a));


module.exports = { Node, kthToLastNode };
