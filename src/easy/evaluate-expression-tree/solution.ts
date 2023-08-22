// https://www.algoexpert.io/questions/evaluate-expression-tree

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree(tree: BinaryTree) {
  return mySolution1(tree);
}

// Recursive
// Complexity (worst-case): time O(n) | space O(h) h=heigth
function mySolution1(node: BinaryTree) {
  if (!node.left || !node.right) return node.value;

  const left = mySolution1(node.left);
  const right = mySolution1(node.right);

  switch (node.value) {
    case -1: return left + right;
    case -2: return left - right;
    case -3: return Math.trunc(left / right);
    case -4: return left * right;
  }
}

export default evaluateExpressionTree;
