/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  // Handle edge cases
  if (head.next === null) return head;

  let prevNode = head;
  let node = head.next;
  while (node.next !== null) {
    node.prev = prevNode;
    prevNode = node;
    node = node.next;
  }
  let newHead = new Node(node.value);
  let newList = newHead;
  while (node.prev !== null) {
    node = node.prev;
    newList.next = new Node(node.value);
    console.log('from function', newList);
    newList = newList.next;
  }
  return newHead;
}

const newNode = new Node(0);
let counter = 1;
function testList(node) {
  if (counter > 6) return node;
  node.next = new Node(counter);
  console.log('from new node', node);
  counter++;
  return testList(node.next);
}

console.log(reverseLinkedList(testList(newNode)));

module.exports = { Node, reverseLinkedList };
