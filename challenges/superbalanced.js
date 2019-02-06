/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function treeHeight(tree) {
  let height = 1;
  let left = 0;
  let right = 0;
  // base case
  if (tree.left === null && tree.right === null) return height;

  // update values for left or right
  if (tree.left !== null) left = treeHeight(tree.left);
  if (tree.right !== null) right = treeHeight(tree.right);

  // update value for height base on what recurive call found
  if (left > height) height = left;
  if (right > height) height = right;

  return 1 + height;
}

function superbalanced(tree) {
  let leftHeight = 0;
  let rightHeight = 0;

  // base case
  if (tree.left === null && tree.right === null) return true;

  if (tree.left !== null) leftHeight = treeHeight(tree.left);
  if (tree.right !== null) rightHeight = treeHeight(tree.right);

  return (Math.abs(leftHeight - rightHeight) < 2);
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

console.log(`true: ${superbalanced(tree)}`);

tree.left.left = new BinaryTree(4);
console.log(`true: ${superbalanced(tree)}`);

tree.left.left.left = new BinaryTree(5);
console.log(`false: ${superbalanced(tree)}`);


module.exports = { BinaryTree, superbalanced };
