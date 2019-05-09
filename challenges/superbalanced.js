/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function superbalanced(tree) {
  // keep count of levels deep to be returned at the end
  // if left exists, get return of recursive call from superbalanced and store in count
  // if right exists, get reutrn of recursive call from superbalanced and store in count
  // how to keep track most top level bst
  // Keep track of difference between return of left and right tree
  let depth = 0;
  if (!this.left && !this.right) {
    return 1;
  }
  if (this.left) {
    depth += superbalanced(this.left);
  }
  if (this.right) {
    depth += superbalanced(this.right);
  }
  return depth;
}


module.exports = { BinaryTree, superbalanced };
