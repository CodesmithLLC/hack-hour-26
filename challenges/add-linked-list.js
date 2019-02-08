/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const addLinked = new Node;
  //while(l1.next || l2.next){
    addLinked.value = l1.value + l2.value;
    addLinked.next 
    let storedRemainder = 0;
  }
  console.log(addLinked.value)
  // if(l1.next == null || l2.next == null) return addLinked;
  // if(l1.next) return addLinkedList(l1.next, l2.next); 
}

const a = new Node(9);
const b = new Node(3);
const c = new Node(1);
const aa = new Node(2);
const bb = new Node(3);
const cc = new Node(5);
a.next = b;
b.next = c;
aa.next = bb;
bb.next = c;
console.log(addLinkedList(a,aa));


// console.log(a);
// console.log(aa);




module.exports = {Node: Node, addLinkedList: addLinkedList};
