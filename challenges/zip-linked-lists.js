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
  if (!l1.head) return l2;
  if (!l2.head) return l1;

  let curr = l1.head;
  let curr2 = l2.head;
  let temp;
  let temp2;
  while (curr.next !== null) {
    temp = curr.next;
    if (curr2 !== null) {
      curr.next = curr2;
      temp2 = curr2.next;
      curr2.next = temp;
    }
    curr = temp;
    curr2 = temp2;
  }
}

module.exports = { Node, zip };
