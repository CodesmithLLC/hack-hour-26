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

    let leftValidation, rightValidation;

    //check left
    if(tree.left) {
        // console.log('checkeing left: ',tree.left.value, tree.value)
        if (tree.left.value > tree.value) {
            // console.log('should be false')
            return false;     
        } else {
            leftValidation = validBST(tree.left);
        }
    }

    // check right
    if(tree.right) {

        // console.log('checkeing right: ',tree.right.value, tree.value)

        if (tree.right.value < tree.value) {
            // console.log('should be false')
            return false;
        } else {
             rightValidation = validBST(tree.right);
        }
    }

    if(leftValidation === false || rightValidation ===false){
        return false;
    }

    return true;
}

// let a = new BinaryTree(5);
// let b = new BinaryTree(3);
// let c = new BinaryTree(8);
// let d = new BinaryTree(2);
// let e = new BinaryTree(4);
// let f = new BinaryTree(63442);
// let g = new  BinaryTree(8);

// a.left = b;
// b.left = d;
// b.right = e;
// a.right = c;
// c.left = f;
// c.right = g;


// console.log(validBST(a));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
