/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  const arr1 = []
  let node1 = l1

  while(node1) {
    arr1.push(node1.value)
    node1 = node1.next;
  }

  const arr2 = []
  let node2 = l2

  while(node2) {
    arr2.push(node2.value)
    node2 = node2.next
  }
  
  const arr3 = []

  for (let i = 0; i < arr1.length; i++ ) {
    arr3.push(arr1[i])
    arr3.push(arr2[i])
  }

  const nodes = []

  for (let i = 0; i < arr3.length; i++) {
    let newNode = new Node(arr3[i])
    nodes.push(newNode)
  }
  
  let current = nodes[0]

  for (let i = 1; i < nodes.length; i++) {
    current.next = nodes[i]
    current = nodes[i]
  }

  return nodes[0]
};

// let node1a = new Node(1)
// let node1b = new Node(3)
// let node1c = new Node(5)
// let node1d = new Node(7)

// node1a.next = node1b;
// node1b.next = node1c;
// node1c.next = node1d

// let node2a = new Node(2)
// let node2b = new Node(4)
// let node2c = new Node(6)
// let node2d = new Node(8)

// node2a.next = node2b;
// node2b.next = node2c;
// node2c.next = node2d



// console.log(zip(node1a, node2a))

module.exports = {Node: Node, zip: zip};
