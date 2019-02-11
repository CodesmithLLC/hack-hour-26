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

function minDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return 1 + Math.min(node.left ? minDepth(node.left) : 0, node.right ? minDepth(node.right) : 0);
}

function maxDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return 1 + Math.max(node.left ? maxDepth(node.left) : 0, node.right ? maxDepth(node.right) : 0);
}

function superbalanced(tree) {
  if (typeof tree === 'undefined') {
    return undefined;
  }
  return maxDepth(tree) - minDepth(tree) <= 1;
}

BinaryTree.prototype.add = function (val) {
  if (this.value !== val) {
    if (val > this.value && this.right !== null) return this.right.add(val);
    if (val < this.value && this.left !== null) return this.left.add(val);

    if (val > this.value && this.right === null) this.right = new BinaryTree(val);
    if (val < this.value && this.left === null) this.left = new BinaryTree(val);
  }
}

const bst = new BinaryTree(10);
bst.add(6);
bst.add(8);
bst.add(12);
bst.add(9);
console.log(superbalanced(bst));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
