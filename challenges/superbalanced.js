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
function height(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  if (tree === null) return true;
  if ((tree.left === null || tree.right === null) && !(tree.left === null && tree.right === null)) return false;
  return superbalanced(tree.left) && superbalanced(tree.right) && Math.abs(height(tree.left), height(tree.right)) < 2;
}


module.exports = { BinaryTree, superbalanced };

const tree = new BinaryTree(7);
tree.left = new BinaryTree(4);
tree.right = new BinaryTree(10);


console.log(superbalanced(tree));
