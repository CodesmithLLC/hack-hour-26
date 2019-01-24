/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// BinaryTree.prototype.add = function (value) {
//     if (value !== this.value) {
//         if (value > this.value && this.right !== null) return this.right.add(value);
//         if (value < this.value && this.left !== null) return this.left.add(value);
//         if (value > this.value) this.right = new BinaryTree(value);
//         if (value < this.value) this.left = new BinaryTree(value);
//     }
// };

// const bst = new BinaryTree(10);

// bst.add(8);
// bst.add(2);
// bst.add(4);
// bst.add(16);
// bst.add(12);


function validBST(tree) {
    if (tree.left === null) return;
    if (tree.right === null) return;
    if (tree.value < tree.right.value) return validBST(tree.right);
    if (tree.value > tree.left.value) return validBST(tree.left);
    if (tree.value > tree.right.value || tree.value < tree.left.value) return false;
    return true;
}

// console.log(bst);
// console.log(validBST(bst));


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
