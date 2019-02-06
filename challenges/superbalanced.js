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

function superbalanced(tree) {
  if (!tree) return -1;

  const leftHeight = superbalanced(tree.left);
  if (leftHeight === -Infinity) return -Infinity;

  const rightHeight = superbalanced(tree.right);
  if (rightHeight === -Infinity) return -Infinity;

  const heightDiff = Math.abs(leftHeight - rightHeight);

  return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
}

function checkBalanced(root) {
  return superbalanced(root) !== -Infinity;
}

const root = new BinaryTree(50);

root.left = new BinaryTree(17);
root.left.left = new BinaryTree(12);
root.left.right = new BinaryTree(23);
root.left.left.left = new BinaryTree(9);
root.left.left.right = new BinaryTree(14);
root.left.right.left = new BinaryTree(19);

root.right = new BinaryTree(72);
root.right.left = new BinaryTree(54);
root.right.right = new BinaryTree(76);
root.right.left.right = new BinaryTree(67);

console.log(checkBalanced(root));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
