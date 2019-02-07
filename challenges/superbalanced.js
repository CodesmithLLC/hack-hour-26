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

  // need to have some counter variables for left and right side. if either side's count is greater than 1, return false.
  
  // start from left to right

  // use helper functions to determine each sides height

  function getHeight(value) {
    if(this.value = null) return 0;

  }
}
var BST = new BinarySearchTree();
BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
