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

function zip(l1, l2) {
  // check that both l1 and l2 are not undefined
  if (l1 === undefined || l2 === undefined) {
    if (l1 === undefined) return l2;
    if (l2 === undefined) return l1;
  }
  // create a pointer for l1 head and l2 head
  let p1 = l1;
  let p2 = l2;
  let currNode = l1;
  // declare a counter starting a 0
  let counter = 0;
  // loop while p1 & p2 are not null
  while (currNode.next) {
    // if counter is even, then set p1.next to p2
    if (counter % 2 === 0) {
      // move p1 to the next node
      if (p1.next !== null) p1 = p1.next;
      // currNode.next points to p2
      currNode.next = p2;
      // move currNode to next node (what was p2)
      currNode = currNode.next;
      counter++;
      console.log(l1);
    }
    // if conter is odd, then set p2.next to p1
    if (counter % 2 !== 0) {
      // move p2 to the next node
      if (p2.next !== null) p2 = p2.next;
      // point currNode to p1
      currNode.next = p1;
      // move currNode to the next node
      currNode = currNode.next;
      counter++;
      console.log(l1);
    }
  }
  //assign currNode.next to the last node in l2, since the loop breaks before this happens
  currNode.next = p2;
  return l1;
}

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

let zipped = zip(a, e);

let currzip = zipped;
while (currzip) {
  console.log(currzip.value);
  currzip = currzip.next;
}

// a-e-b-f-c-g

module.exports = { Node: Node, zip: zip };
