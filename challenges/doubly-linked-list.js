/* eslint-disable func-names */
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
LinkedList.prototype.add = function (val) {
  const newTail = new Node(val);

  // handle an empty list
  if (this.head === null) {
    this.head = newTail;
    this.tail = newTail;
    return;
  }

  const oldTail = this.tail;

  // update linked list tail
  this.tail = newTail;

  // make old tail point at new tail
  oldTail.next = newTail;

  // make new tail point at old tail
  newTail.prev = oldTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let current = this.head;

  // node found is head
  if (current.val === val) {
    this.head = current.next;
    this.head.prev = null;
    return current;
  }

  // traverse to find node with val
  while (current !== null && current.val !== val) {
    current = current.next;
  }

  // no node found
  if (current === null) return undefined;

  // node found is tail
  if (current !== null && this.tail === current) {
    this.tail = current.prev;
    this.tail.next = null;
    return current;
  }

  // node found is in the middle of the list
  const { prev, next } = current;
  prev.next = next;
  next.prev = prev;
  return current;
};


// const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);

// list.remove(5);

// console.log(list);


module.exports = LinkedList;
