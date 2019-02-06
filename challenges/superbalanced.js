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
 // tree left and tree right are null, then return true
 if (tree.left === null && tree.right === null) return true;
 let depthLeft = 0;
 let depthRight = 0;

 // check if the left tree is balanced and count the depth
// if it isn't balanced then return false
 function recurseLeftBST(bst, min, max) {
   // if reached the end, we want to return true
   if (!bst) return true;
   depthLeft += 1;
   // if current value is greater then the max return false
   if (bst.value >= max) return false;
   // if the current value is greater then the min, return false
   if (bst.value <= min) return false;
   // recurse the left side, where max is the current value and min stays the same
   // recurse the right side, where max stays the same and min is the current value
   return recurseLeftBST(bst.left, min, bst.value) && recurseLeftBST(bst.right, bst.value, max);
 };
  recurseLeftBST(tree.left, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);


  // check if the right tree is balanced and count the depth
  // if it isn't balanced then return false
  function recurseRightBST(bst, min, max) {
    // if reached the end, we want to return true
    if (!bst) return true;
    depthRight += 1;
    // if current value is greater then the max return false
    if (bst.value >= max) return false;
    // if the current value is greater then the min, return false
    if (bst.value <= min) return false;
    // recurse the left side, where max is the current value and min stays the same
    // recurse the right side, where max stays the same and min is the current value
    return recurseRightBST(bst.left, min, bst.value) && recurseRightBST(bst.right, bst.value, max);
  };
  recurseRightBST(tree.right, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

 // if the difference between the left depth and the right depth is greater then 1, return false
 const difference = Math.abs(depthLeft - depthRight);
 if (difference > 1) return false;
 // otherwise, return true
 return true;
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
