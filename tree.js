/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;
    let numbersStack = [this.root];

    let sum = 0;

    while (numbersStack.length) {
      let current = numbersStack.pop();
      sum += current.val;

      for (let child of current.children) {
        numbersStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;
    let numbersStack = [this.root];
    let countEven = 0;

    while (numbersStack.length) {
      let current = numbersStack.pop();
      if (current.val % 2 === 0) {
        countEven += 1;
      }

      for (let child of current.children){
        numbersStack.push(child);
      }
    }
    return countEven;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;
    let numbersStack = [this.root];
    let countGreater = 0;

    while (numbersStack.length) {
      let current = numbersStack.pop();
      if (current.val > lowerBound) {
        countGreater += 1;
      }

      for (let child of current.children){
        numbersStack.push(child);
      }
    }
    return countGreater;

  }
}

module.exports = { Tree, TreeNode };
