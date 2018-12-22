/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function LinkedList() {
  this.head = null;
  this.length = 0;

}

function Node(val) {
  this.value = val;
  this.next = null;
}
  
LingkedList.prototype.addToHead = function(val) {
    let nodeToAdd = new Node(val),
        nodeToCheck = this.head;

}

function kthToLastNode(k, head) {
  // take in two parameters - k and head
  // k is an integer
  // head is the head of a singly linked list
  // return the VALUE on the kth to the last node in the list
  // if this.Node.next is null, then that is the last node in the list
  // how do we return the value assigned to the node k "spaces" back from the last?

  
  let thisNode = this.head;
  count = 0;
  
  while(thisNode) {
      if(thisNode.next === null ) {
        return thisNode.something.something.value;
        count += 1; 
      }
          
      thisNode = thisNode.next;
  }
    
  return thisNode;
}
    

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
