/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  // base case => no left or right => terminal return true

  // if the tree terminates OR the value is correct for the side it's on -> true
  let left = (tree.left === null) || (tree.value > tree.left);
  let right = (tree.right === null) || (tree.value < tree.right);
  console.log(`intial vals:\nvalue: ${tree.value}\nleft: ${left}\nright: ${right}`);


  // if there is a node to explore AND the value is correct for its side,
  // continue to explore, and update left and right accordingly
  if (tree.left !== null && left) left = validBST(tree.left);
  if (tree.right !== null && right) right = validBST(tree.right);

  return left && right;
}

module.exports = { BinaryTree, validBST };


const one = new BinaryTree(1);
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);
const six = new BinaryTree(6);
const seven = new BinaryTree(7);


// handles terminal tree
six.left = seven;
six.right = seven;

console.log(`expect true: ${validBST(four)}`);
console.log(`expect false: ${validBST(six)}`);

six.left = five;
console.log(`expect true: ${validBST(six)}`);

six.right = four;
console.log(`expect false: ${validBST(six)}`);
