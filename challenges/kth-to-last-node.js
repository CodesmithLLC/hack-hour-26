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
  let valuesArray =[];
  //Run through the linked list
    //and store each value in an array as we go
  while(head.next !== null){
    valuesArray.push(head.value)
    head = head.next
  }
  //When we get to the end of the linked list (where next is null) that's the last value of the array.
    //add the last value to the Array 
    //return the element at array[array.length - k]
  if(head.next === null){
    valuesArray.push(head.value)
    return valuesArray[valuesArray.length -k]
  }

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a))