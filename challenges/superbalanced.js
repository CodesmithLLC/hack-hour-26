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

BinaryTree.prototype.add = (value) => { 
  function recurse(bst) {
    if (bst.value > value && bst.left === null) {
      bst.left = new BinaryTree(value);
    } else if (bst.value < value && bst.right === null) {
      bst.right = new BinaryTree(value);
    } else if (bst.value > value) {
      recurse(bst.left);
    } else if (bst.value < value) {
      recurse(bst.right);
    }
  }

  recurse(bst); // ie., bst
};

function superbalanced(tree, leftTreeHeight = 0, rightTreeHeight = 0) {
  // have left bal - true
  // right bal -> true
  console.log(leftTreeHeight)
  console.log(rightTreeHeight)

  // if (!tree.left && !tree.right) return Math.abs(leftTreeHeight - rightTreeHeight) < 2;

  if (tree.left) {
    return superbalanced(tree.left, leftTreeHeight + 1, rightTreeHeight); 
  }

  if (tree.right) {
    return superbalanced(tree.right, leftTreeHeight, rightTreeHeight + 1);
  }

  return Math.abs(leftTreeHeight - rightTreeHeight) < 2;
}

const bst = new BinaryTree(10);
bst.add(11);
bst.add(12);
bst.add(9);
bst.add(8);
bst.add(7)
bst.add(6)

console.log(bst);
console.log(superbalanced(bst));
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};