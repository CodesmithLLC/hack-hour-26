/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);

  // * If no head, assign newNode as head
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    return this.head;
  }

  // * Add newNode to tail
  let pointer = this.tail;
  this.tail.next = newNode;
  this.tail = this.tail.next;
  this.tail.prev = pointer;
  return this.head;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // * Define pointer
  let currNode = this.head;
  // * Check if head is target val and only node
  if (this.head.val === val && this.tail === this.head) {
    this.head = null;
    this.tail = null;
    return currNode;
  }

  // * Check if head is target val
  if (this.head === val && this.tail !== this.head) {
    this.head = this.head.next;
    this.head.prev = null;
    return currNode;
  }

  currNode = currNode.next;

  // * Loop through LL until val is found and remove it
  while (currNode !== null && currNode.val !== val) {
    currNode = currNode.next;
  }
  
  // * Check if tail is target val
  if (this.tail.val === val) {
    currNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    currNode.prev = null;
    return currNode;
  }

  if (currNode.val === val) {
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
    return currNode;
  }

  return undefined;
};

// const testLL = new LinkedList();
// testLL.add(5);
// console.log(testLL);
// testLL.add(6);
// testLL.add(7);
// testLL.add(8);
// console.log('LLLLLL', testLL);
// testLL.remove(7);
// console.log(testLL);

module.exports = LinkedList;
