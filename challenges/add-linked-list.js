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
  const l3 = new Node(0);
  let curr1 = l1;
  let curr2 = l2;
  let curr3 = l3;

  while (curr1 !== null || curr2 !== null) {
    let sum = curr3.value;
    if (curr1 === null) {
      sum += curr2.value;
    } else if (curr2 === null) {
      sum += curr1.value;
    } else {
      sum += curr1.value + curr2.value;
    }

    curr3.value = Math.floor(sum % 10);
    curr3.next = new Node(Math.floor(sum / 10));
    curr1 = (curr1 !== null) ? curr1.next : curr1;
    curr2 = (curr2 !== null) ? curr2.next : curr2;
    curr3 = curr3.next;
  }
  return l3;
}

module.exports = { Node, addLinkedList };

const l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(5);
l1.next.next.next = new Node(7);

const l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);


console.log(addLinkedList(l1, l2));
