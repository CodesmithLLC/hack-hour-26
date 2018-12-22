/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //create a counter element to track the last node
  let counter = 1;
  //create a result variable to return the value of the kth to the last node
  let result = head;
  //use a while statement, if next === undefined, stop
  while (result !== undefined) {
    //traverse the loop
    result = result.this.next;
    //counter++
    counter++;
  }
  //decrement counter by (k - 1)
  counter -= (k - 1);
  //reset result
  result = head;
  //use a while statement (if counter >= 0), continue
  while (counter > 0) {
    //traverse the loop
    result = this.next;
    //decrement counter by 1
    counter--
  }
  //return the value of result
return result;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
