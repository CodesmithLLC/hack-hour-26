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

  let l1Arr =[];
  let l2Arr =[];


  while ( l1 ) {
    l1Arr.push(l1.value);
    l1 = l1.next;
  }

  while ( l2 ) {
    l2Arr.push(l2.value);
    l2 = l2.next;
  }

  const newL1 = parseInt(l1Arr.reverse().join(""),10);
  const newL2 = parseInt(l2Arr.reverse().join(""),10);
  const sum = (newL1 + newL2).toString();
  console.log(sum);


  let head = new Node(sum.substring(0, sum.length -1));
  console.log(head);

}

const a1 = new Node(2);
const a2 = new Node(1);
const a3 = new Node(5);
a1.next = a2;
a2.next = a3;

const b1 = new Node(5);
const b2 = new Node(9);
const b3 = new Node(2);
b1.next = b2;
b2.next = b3;


addLinkedList(a1,b1);

module.exports = {Node: Node, addLinkedList: addLinkedList};
