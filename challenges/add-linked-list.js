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
  let firstArr = [];
  let node = l1;

  while(node) {
    firstArr.push(node.value)
    node = node.next;
  }

  let secondArr = [];
  let node2 = l2;

  while(node2) {
    secondArr.push(node2.value);
    node2 = node2.next;
  }

  let firstNum = parseInt(firstArr.reverse().join(''));
  let secondNum = parseInt(secondArr.reverse().join(''));

  return firstNum + secondNum
}

// const link1a = new Node(3)
// const link1b = new Node(2)
// const link1c = new Node(1)

// link1a.next = link1b
// link1b.next = link1c

// const link2a = new Node(6)
// const link2b = new Node(5)
// const link2c = new Node(4)

// link2a.next = link2b
// link2b.next = link2c
// console.log(link1a)

// console.log(addLinkedList(link1a, link2a))

module.exports = {Node: Node, addLinkedList: addLinkedList};
