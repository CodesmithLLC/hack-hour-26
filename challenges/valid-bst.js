/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//in order traversal
// pre-order traversal

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // set a helper
}

const tree = new BinaryTree(10);

console.log(tree.find(15));

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {}

let a = new BinaryTree(5);
let b = new BinaryTree(3);
let c = new BinaryTree(8);
let d = new BinaryTree(1);
let e = new BinaryTree(4);
let f = new BinaryTree(7);
let g = new BinaryTree(9);

a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.left = f;
c.right = g;
// function validBST(tree) {
// declare a helper function to do recursion

//declare an empty array to store values in ASC order

// check left recursively and then push
//check right recursively and push

// iterate through array to check if values are in ASC  order

// }

module.exports = { BinaryTree: BinaryTree, validBST: Node };
