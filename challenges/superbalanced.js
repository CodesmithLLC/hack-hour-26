/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value,left,right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function superbalanced(tree) {


  const helper = (node) => {
    
    if (node === null) {
      return 0;
    } else {
      // do a post order traversal
      let leftResult =  1 + helper(node.left);
      let rightResult = 1 + helper(node.right);
      console.log(leftResult,rightResult);


      
      if(leftResult > rightResult) {
        if(leftResult - rightResult > 1) {
          return false;
        } else {
          return true;
        }
      }

      else {
        if(rightResult - leftResult >1) {
          return false; 
        } else {
          return true;
        }
      }
    
    }
  
  }

  helper(tree);

}

let root = new BinaryTree(8,
  new BinaryTree(4,new BinaryTree(3, null, null),new BinaryTree(7, new BinaryTree(6, new BinaryTree(5,null,null), null)), null),
  new BinaryTree(12, new BinaryTree(10, null, new BinaryTree(11,null,null))), new BinaryTree(14,null,null)
 )

 superbalanced(root);


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
