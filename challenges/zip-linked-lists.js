/* Merge two linked lists so that their nodes alternate. 
 * Let the first node of the zipped list be the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let current = l1.value
  let next = next.value
  console.log(current)
  current = next.value
  console.log(current)
  current = next.value
  console.log(current)

 


  // iterate over the first list
  // make the current value the head
  // then switch to the second list and make that node the current node
  // stop when both this.nexts = null

};


// Test your code
l1 = {
  value: 3,
  next: {
    value: 6,
    next: {
      value: 9,
      next: null
    }
  }
};

l2 = {
  value: 10,
  next: {
    value: 12,
    next: {
      value: 25,
      next: null
    }
  }
};

zip(l1, l2);

module.exports = {Node: Node, zip: zip};
