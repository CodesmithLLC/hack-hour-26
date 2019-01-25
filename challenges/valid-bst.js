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

function validBST(tree) {
  // * DEFINE EMPTY ARR;
  const bstArr = [];
  // * DEFINE RECURSIVE FUNCTION THAT ADDS VALUES FROM BST TO ARR FROM SMALLEST TO LARGEST VALUE
  const addBSTValues = node => {
    // * CHECK IF TREE IS NULL
    if (node === null) return tree;
    // * TRAVERSE LEFT
    addBSTValues(node.left);
    // * ADD VALUE TO ARR
    bstArr.push(node.value);

    // * TRAVERSE RIGHT
    addBSTValues(node.right);
  };
  
  // * INVOKE ADDBST FUNCTION
  addBSTValues(tree);

  // * LOOP THROUGH THE ARR AND CHECK TO SEE THAT THE VALUES GO FROM SMALLEST TO LARGEST
  for (let i = 0; i < bstArr.length - 1; i++) {
    if (bstArr[i] > bstArr[i + 1]) return false;
  }

  return true;
}

let BST = new BinaryTree(7);
BST.left = new BinaryTree(20);
BST.right = new BinaryTree(9);
BST.left.left = new BinaryTree(5);
BST.right.left = new BinaryTree(8);

console.log(validBST(BST));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
