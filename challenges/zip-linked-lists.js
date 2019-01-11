/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 the first node of the first argument, if it exists.
  Implement the linked list using only a Node class. No need for a wrapper LinkedList class
  BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let tracker1 = l1.head;
  let tracker2 = l2.head;

  while (tracker1 && tracker2) {
    tracker1 = tracker1.next


  }



  
  let tracker1 = new Node(l1.head);
  tracker1.next = l1.head.next;
  let tracker2 = new Node(l2.head);
  tracker2.next = l2.head.next;
  let tempNode1 = l1.head;
  while (tempNode1 && tempNode2) {
    tempNode = tempNode.next;

  }

  //change the value of the tracker1 node's next to be l2
  l1.head.next.next = l2.head.next;


  //set the next value of currentNode.next to equal the first node in l2
  tempNode1.next = l2.head.next;





  

};

module.exports = {Node: Node, zip: zip};
