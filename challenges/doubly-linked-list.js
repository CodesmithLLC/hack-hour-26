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
  // * Check for head
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
    return this.head;
  }
  // * Assign pointer to tail
  let pointer = this.tail;
  // * Assign tail.next to new node
  this.tail.next = new Node(val);
  // * Assign tail to new node
  this.tail = this.tail.next;
  // * Assign tail.prev to pointer
  this.tail.prev = pointer;
  // * Return head
  return this.head;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // * Check if head is target val and only node
  if (this.head.val === val && this.tail === this.head) {
    this.head = null;
    this.tail = null;
    return this.head;
  }

  // * Check if head is target val
  if (this.head === val && this.tail !== this.head) {
    this.head = this.head.next;
    this.head.prev = null;
    return this.head;
  }
  // * Define pointer
  let currNode = this.head.next;

  // * Loop through LL until val is found and remove it
  while (currNode !== null) {
    if (currNode.val === val) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      return this.head;
    }
    currNode = currNode.next;
  }
  return this.head;
};

// const testLL = new LinkedList();
// testLL.add(5);
// console.log(testLL);
// testLL.add(7);
// console.log(testLL);
// testLL.add(8);
// testLL.remove(7);
// console.log(testLL);

module.exports = LinkedList;
