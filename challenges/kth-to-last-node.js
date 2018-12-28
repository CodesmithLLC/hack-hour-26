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

/*
function kthToLastNode(k, head) {

  let vals =[];
  let curr = head;

  while(curr.next != null){
    vals.push(curr.value);
    curr = curr.next;
  }

  let index = vals.length -k;

  if(index<=0){
    return -1;
  }

  else{
    return vals[index];
  }

}*/

function kthToLastNode(k,head) {
  let index =0;
  let curr = head;
  let kthNode = head;

  for(let i=0; i<k; i++){
    curr = curr.next;
  }

  while(curr.next != null){
    curr = curr .next;
    kthNode = kthNode.next;
  }

  return kthNode.value;
}

/*let Node1 = new Node('1');
let Node2 = new Node('2');
let Node3 = new Node('3');
let Node4 = new Node('4');

Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node4;

console.log(kthToLastNode(1,Node1));*/


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
