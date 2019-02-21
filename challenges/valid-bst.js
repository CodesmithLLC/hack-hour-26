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
//   if (tree.left === null && tree.right === null) return true;
  if ((tree.left < tree.value || tree.left === null) && (tree.right > tree.value || tree.right === null)) return true;
  if (validBST(tree.left) && validBST(tree.right)) return true;

  return false;
}

module.exports = { BinaryTree, validBST };
const one = new BinaryTree(1);
const two = new BinaryTree(2);
const three = new BinaryTree(3);
three.left = one;
// three.right = 5;
const four = new BinaryTree(4);
const five = new BinaryTree(5);


console.log(validBST(three));
