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
  // create new linked list with node.this.value being l1, 
  this.head = l1;
  this.tail = l2;
  // loop through the l1 list and reassign 
  while (this.tail.next !== null) {
    // for every iteration over l1, this.value should be updated to l1.next
    // and this.next && this.tail should be updated to l2.next
    this.tail.next = l1.next
  }
};

module.exports = {Node: Node, zip: zip};
