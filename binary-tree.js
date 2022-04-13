/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    // console.log("minDepth, node :", node);
    if (!node) return 0;

    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;        
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    // console.log("maxDepth, node :", node);
    if (!node) return 0;

    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;        
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if (!node) return null;
    let numberStack = [node];
    let nextLowest = Infinity;

    while(numberStack.length){
      let current = numberStack.pop();

      if (current.val > lowerBound && current.val < nextLowest){
        nextLowest = current.val;
      }
      if(current.left) numberStack.push(current.left);
      if(current.right) numberStack.push(current.right);
    }

    return nextLowest === Infinity ? null : nextLowest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    function depth(nodeToSearch, node= this.root){
      if (!node) return -1;

      if(node === nodeToSearch) return 0;

      if(node.left){
        let leftSide = depth(node.left);
        return leftSide === -1 ? -1 : leftSide + 1;
      }
      if(node.right){
        let rightSide = depth(node.right);
        return rightSide === -1 ? -1: rightSide + 1;
      } 
    }

    function parent(nodeToSearch, node= this.root){
      if (!node) return null;
      let nodeStack = [node];
      while(nodeStack.length){
        let current = nodeStack.pop();
        if (current.left === nodeToSearch || current.right === nodeToSearch){
          return current;
        }
        if(current.left) nodeStack.push(current.left);
        if(current.right) nodeStack.push(current.right);
      }
      return null;
    }
    if(depth(node1) === depth(node2) && parent(node1) !== parent(node2)){
      return true;
    }
    return false;
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
