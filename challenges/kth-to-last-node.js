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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if(!head) return undefined;
  if(!head.next) return head;
  if(k < 1) return undefined;
  let nodeTracker = []; // keeps track of k nodes
  let count = 0;
  let curr = head;
  while(curr){
    count++;
    nodeTracker.push(curr);
    if(nodeTracker.length > k) nodeTracker.shift();
    curr = curr.next;
  }
  console.log(nodeTracker)
  if(count < k) return "K value larger than linked list size";
  return nodeTracker[0].value;


}
/*
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

 console.log(kthToLastNode(6, a));
 */

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
