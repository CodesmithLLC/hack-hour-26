/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1 = null, l2 = null) {
  // edge cases?
  if (l1 === null || l2 === null) {
    return l2 === null ? l1 : l2;
  }

  // grab nodes:
  //  insertBehind (from l1)
  //  insertBefore (from l1)
  //  currentInsert (from l2)
  //  nextInsert (from l2);

  // check to see if any are tails -> handle tails

  // else...
  // insertBehind.next -> currentInsert.next -> insertBefore

  // update working nodes
  //  insertBehind = insertBehind.next.next
  //  insertBefore = insertBefore.next
  //  currentInsert = nextInsert
  //  nextInsert = nextInsert.next

  // repeat...

  let insertBehind = l1;
  let insertBefore = insertBehind.next;
  let currentInsert = l2;
  let nextInsert = currentInsert.next;


  while (insertBefore !== null && currentInsert !== null) {
    // zip
    insertBehind.next = currentInsert;
    currentInsert.next = insertBefore;

    // then move down the list
    insertBehind = insertBehind.next.next;
    insertBefore = insertBefore.next;
    currentInsert = nextInsert;
    if (nextInsert.next !== null) nextInsert = nextInsert.next;
  }

  // found l1's tail
  if (insertBefore === null) {
    insertBehind.next = currentInsert;
  }

  // currentInsert.val === null -> found l2's tail;
  return l1;
}

module.exports = { Node, zip };

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next = c;


const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
e.next = f;
f.next = g;


const zipped = zip(a, e);

let currzip = zipped;
while (currzip) {
  console.log(currzip.value);
  currzip = currzip.next;
}

// const odds = new Node(1);
// const evens = new Node(2);

// // odds.next = new Node(3);
// // odds.next.next = new Node(5);
// // odds.next.next.next = new Node(7);
// // odds.next.next.next.next = new Node(9);

// evens.next = new Node(4);
// evens.next.next = new Node(6);
// evens.next.next.next = new Node(8);
// evens.next.next.next.next = new Node(10);

// console.log(zip(odds, evens));
// let result = zip(odds, evens);
// const current = result;
// while (current) {
//   console.log(result.val);
//   result = result.next;
// }
