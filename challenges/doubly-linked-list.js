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
    const node = new Node(val);

    if (!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;
  while(cur){
    if(cur.val === val){
      if(cur === this.head && cur === this.tail){
        this.head = null;
        this.tail = null;
      } else if(cur === this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if(cur === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
      cur = cur.next;
    }
  }
};

module.exports = LinkedList;
