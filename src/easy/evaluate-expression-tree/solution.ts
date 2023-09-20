// https://www.algoexpert.io/questions/evaluate-expression-tree

function evaluateExpressionTree(tree: BinaryTree) {
  return mySolution1(tree);
}

// Recursive
// Complexity (worst-case): time O(n) | space O(h) h=heigth
function mySolution1(node: BinaryTree): number {
  if (!node.left || !node.right) return node.value;

  const left = mySolution1(node.left);
  const right = mySolution1(node.right);

  switch (node.value) {
    case -1: return left + right;
    case -2: return left - right;
    case -3: return Math.trunc(left / right);
    case -4: return left * right;
  }

  return 0;
}

export default evaluateExpressionTree;
