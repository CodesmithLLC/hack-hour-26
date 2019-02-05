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
  let carriedOne = false;
  const output = new Node(l1.value + l2.value);
  let a = l1.next;
  let b = l2.next;

  let current = output;

  while (a !== null && b !== null) {
    // add the values of a & b
    let sum = a.value + b.value;

    // check for a carried one from the previous sum, add 1 if true
    // reset carriedOne to false
    if (carriedOne) sum += 1;
    carriedOne = false;

    // check if summed value is greater than or equal to 10
    // true -> set carriedOne to true
    // subtract 10 from summed value
    if (sum >= 10) {
      sum -= 10;
      carriedOne = true;
    }

    // make a new node with the summed value
    // set current.next to new node
    current.next = new Node(sum);

    // update pointers current, a, b, to their 'next'
    current = current.next;
    a = a.next;
    b = b.next;
  }

  // handle leftover nodes from either list
  if (carriedOne) current.next = new Node(1);
  current = current.next;

  if (a !== null) {
    let sum = a.value + current.value;

    if (sum >= 10) {
      carriedOne = true;
      sum -= 10;
    }

    current.next = new Node(sum);
    current = current.next;
  }

  if (b !== null) {
    let sum = b.value + current.value;

    if (sum >= 10) {
      carriedOne = true;
      sum -= 10;
    }

    current.next = new Node(sum);
    current = current.next;
  }

  if (carriedOne) current.next = new Node(1);

  return output;
}

const x = new Node(2);
x.next = new Node(1);
x.next.next = new Node(5);

const y = new Node(5);
y.next = new Node(9);
y.next.next = new Node(2);

const z = addLinkedList(x, y);
console.log(z.value, z.next.value, z.next.next.value);
console.log(z);

module.exports = { Node, addLinkedList };
