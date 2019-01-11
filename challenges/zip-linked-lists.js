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

function zip(l1, l2, l3 = new Node(null), s = 0) {
  if (l1.value === null || l2.value === null) return l3;
  if (l3.value === null) {
    l3.value === l1.value;
    s = 1;
  }
  s = 0 ? zip(l1.next, l2, l3.next(new Node(l1.value)), s = 1) : zip(l1, l2.next, l3.next(new Node(l2.value)), s = 0);
};

module.exports = { Node: Node, zip: zip };
