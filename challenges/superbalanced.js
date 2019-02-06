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
  // have a left max depth counter
  // have a right max depth counter
  // have a current depth counter that will increment or decrement as it is going up and down the tree
  // create one function that will traverse the tree and call it twice storing each result in left or right tree depth variable
  if (!tree.left && !tree.right) return true;
  function howDeep(branch, currentDepth = 1, maxDepth = 0) {
    if (currentDepth > maxDepth) maxDepth = currentDepth;
    if (!branch.left && !branch.right) return maxDepth;
    if (branch.left) maxDepth = howDeep(branch.left, (currentDepth += 1), maxDepth);
    if (branch.right) maxDepth = howDeep(branch.right, (currentDepth += 1), maxDepth);
    return maxDepth;
  }
  return Math.abs(howDeep(tree.left) - howDeep(tree.right)) <= 1;
}

module.exports = { BinaryTree, superbalanced };
