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
  let cur = this.head;
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else if (!this.tail.prev) {
    cur.next = new Node(val);
    this.tail = cur.next;
    this.tail.prev = cur;
  } else {
    while (cur.next.next) {
      cur = cur.next;
    }
    cur.next.next = new Node(val);
    this.tail = cur.next.next;
    this.tail.prev = cur.next;

  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {

};

const ll = new LinkedList();
ll.add(8);
ll.add(3);
ll.add(5);
ll.add(2);
console.log(ll);

module.exports = LinkedList;
