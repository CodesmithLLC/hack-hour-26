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
  // check that both l1 and l2 are not null
  if (l1 === null || l2 === null) return null;
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
      // set p2 to p2.next
      p1 = p1.next;
      // set l1.next to l2
      currNode.next = p2;
      currNode = currNode.next;
    }
    // if conter is odd, then set p2.next to p1
    if (counter % 2 !== 0) {
      // set p2 to p2.next
      p2 = p2.next;
      // set 12.next to p1
      currNode = p1;
      currNode = currNode.next;
    }
  }
  return l1;
}

module.exports = { Node: Node, zip: zip };
