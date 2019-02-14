/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

function deleteDups(head) {
  let current = head.head;
  let newlist = new Node(head.head);
  let storage = [];
  while (current) {
    if (!storage.includes(current.value)) {
      storage.push(current);
    }
    if (storage.includes(current.next.value)) {
      current = current.next.next;
    }
    newlist.next = current.next;
    current = current.next;
  }

  return newlist;
}

let list = new SinglyLinkedList();
list.push(5);
list.push(4);
list.push(2);
console.log(list.head);

module.exports = deleteDups;
