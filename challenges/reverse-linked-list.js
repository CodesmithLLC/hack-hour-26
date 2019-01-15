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
  // initialize 3 pointers:
  let reversed = null;
  let current = head;
  let nextReverse = current.next;

  // while (nextReverse !== null)
  while (nextReverse !== null) {
    // reverse the next pointer of current
    current.next = reversed;

    // update all pointers to traverse list
    reversed = current;
    current = nextReverse;
    nextReverse = nextReverse.next;
  }

  // once out of the loop we found the tail
  current.next = reversed;
  return current;
}

module.exports = { Node, reverseLinkedList };

// *** TESTING *** //

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// const reversed = reverseLinkedList(a);
// console.log(reversed);
// console.log('\n');
// console.log(reversed.next);
// console.log('\n');
// console.log(reversed.next.next);
// console.log('\n');
// console.log(reversed.next.next.next);
// console.log('\n');
