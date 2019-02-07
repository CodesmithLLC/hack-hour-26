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

  let leftHeight = 0;
  let rightHeight = 0;

  let node = tree;

  while(node) {
    node = node.left;
    leftHeight += 1;
  }

  let node2 = tree;

  while(node2) {
    node2 = node2.right;
    rightHeight += 1;
  }

  const difference = leftHeight - rightHeight;

  if (Math.abs(difference) === 0 || Math.abs(difference) === 1) {
    return true;
  } 
  return false;
}

// const myTree1 = new BinaryTree(10)
// const myTree3 = new BinaryTree(12)
// const myTree2 = new BinaryTree(13)

// myTree1.right = myTree3
// myTree3.right = myTree2

// console.log(superbalanced(myTree1))


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
