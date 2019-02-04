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

// function validBST(tree) {


// }



function isValidBST(node) {

    let leftSide = node.left.value;
    let rightSide = node.right.value;
    console.log(node.value)
    console.log(leftSide)

    if (leftSide.value >= node.value) {
        return false;
    }

    if (rightSide.value <= node.value) {
        return false;
    }

    // if (max !== null && node.value >= max) {
    //   return false;
    // }
    // if (min !== null && node.value <= min) {
    //   return false;
    // }
    // const leftSide = isValidBST(node.left, min, node.value);
    // const rightSide = isValidBST(node.right, node.val, max);
    
    // return leftSide && rightSide;
    return true;
    }
    

const myTree = new BinaryTree(17)
myTree.left.value = 123
myTree.left.right.value = 16
myTree.left.left.value = 13
myTree.right.value = 19
myTree.right.left.value = 18
myTree.right.right.value = 21


// console.log(isValidBST(myTree))

// module.exports = {BinaryTree: BinaryTree, validBST: validBST};
