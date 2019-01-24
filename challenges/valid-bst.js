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
    //declare a left tracker variable set equal to this.left
    let leftTracker = tree.left;
    //declare a right tracker variable set equal to this.right
    let rightTracker = tree.right;
    //stopping condition: if tree is out of nodes, and never hit false, return true
    if (!leftTracker && !rightTracker) return true;
    //if leftTracker.value > argument.value return false
    if (leftTracker.value > tree.value) {
        return false;
    //if left tracker still exists and is less than argument.value, recurse again
    } else if (leftTracker.value) {
        return validBST(leftTracker);
    }
    if (rightTracker.value < tree.value) {
        return false;
    } else if (rightTracker.value) {
        return validBST(rightTracker)
    }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
