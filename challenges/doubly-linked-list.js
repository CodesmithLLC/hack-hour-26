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

  if(!this.tail && !this.head){
    const node = new Node(val);
    this.head = node;
    this.tail = node;
  } else {
    const node = new Node(val);
    node.next = this.tail;
    this.tail.prev = node;
    this.tail = node;
  }
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

  if(this.head){
    let curr = this.head;
    while(curr){

      if(curr.val === val) {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        delete curr;
        return val;
      } else {
        curr = curr.prev;
      }
    }

    return;
  }


  
};

// let ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.remove(2);
// let curr = ll.head;
// while(curr){
//   console.log(curr.val);
//   curr = curr.prev;
// }

module.exports = LinkedList;
