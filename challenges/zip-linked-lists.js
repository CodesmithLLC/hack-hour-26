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
  // create a current position node for each 
  let currentNodeList1 = l1.head;
  let currentNodeList2 = l2.head;

  // while the linked list next value is not null, then continue
  while(currentNodeList1.next !== null) {
    // temporarily store the next value of the currentNode
    let temp = currentNodeList1.next;
    // create a new node of list2 current value
    const toInsert = new Node(currentNodeList2.value);
    // change the next value to be the old next value
    toInsert.next = temp;
    // insert the new node to be the next value of the curre
    currentNodeList1.next = toInsert;
    // change the currentNode to be the 
    currentNodeList1 = currentNodeList1.next.next;
    currentNodeList2 = currentNodeList2.next;
  }
  l1.tail.next = l2.tail
  return l1;
};


module.exports = {Node: Node, zip: zip};
