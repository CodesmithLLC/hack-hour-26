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
  let newNodeOne = new Node(l1);
  let newNodeTwo = new Node(l2);

  while (newNodeOne.next === null) {
    newNodeOne.next = newNodeTwo;
  }
  while (newNodeTwo.next === null) {
    newNodeTwo.next === newNodeOne;
  }

  return this;
}

module.exports = { Node: Node, zip: zip };
