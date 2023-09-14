// Test: make test t=bst-construction

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Add an index signature to allow string keys
  [key: string]: any;

  insert(value: number): BST {
    // return this.myInsert(value);
    return this.insertSolution(value);
  }

  // Complexity (average-case): time O(logn) | space O(n)
  // Complexity (worst-case): time O(n) | space O(n)
  insertSolution(value: number): BST {
    let currNode: BST = this;
    while (true) {
      if (value < currNode.value) {
        if (!currNode.left) {
          currNode.left = new BST(value);
          break;
        } else { currNode = currNode.left; }
      } else {
        if (!currNode.right) {
          currNode.right = new BST(value);
          break;
        } else { currNode = currNode.right; }
      }
    }

    return this;
  }

  // Complexity (worst-case): time O(n) | space O(n)
  myInsert(value: number): BST {
    if (value < this.value) {
      if (this.left) this.left.myInsert(value);
      else this.left = new BST(value);
    }
    
    if (value >= this.value) {
      if (this.right) this.right.myInsert(value);
      else this.right = new BST(value);
    }

    return this;
  }

  contains(value: number): boolean {
    if (value === this.value) return true;
    if (value < this.value && this.left) return this.left.contains(value);
    if (value >= this.value && this.right) return this.right.contains(value);
    return false;
  }

  remove(value: number): BST {
    let parent: BST | null = null;
    let node: BST | null = this;
    while (node) {
      if (value < node.value) {
        parent = node;
        node = node.left;
      } else if (value > node.value) {
        parent = node;
        node = node.right;
      } else {
        if (node.left && node.right) {
          // iterative
          let rightMostParent = node;
          let rightMost = node.right;
          while (rightMost.left) {
            rightMostParent = rightMost;
            rightMost = rightMost.left;
          }
          node.value = rightMost.value;
          if (rightMostParent.left === rightMost) {
            rightMostParent.left = rightMost.right;
          } else {
            rightMostParent.right = rightMost.right;
          }
          // recursive
          // node.value = node.right.getMinValue();
          // node.right.remove(node.value);
        } else if (!parent) {
          if (node.left) {
            node.value = node.left.value;
            node.right = node.left.right;
            node.left = node.left.left;
          } else if (node.right) {
            node.value = node.right.value;
            node.left = node.right.left;
            node.right = node.right.right;
          } else {
            // single-node tree; do nothing
          }
        } else if (parent.left === node) {
          parent.left = node.left ? node.left : node.right;
        } else if (parent.right === node) {
          parent.right = node.left ? node.left : node.right;
        }
        break;
      }
    }

    return this;
  }

  getMinValue(): number {
    let node: BST | null = this;
    while (node.left) node = node.left;
    return node.value;
  }
}


export default BST;
