// https://www.algoexpert.io/questions/branch-sums

function branchSums(root: BinaryTree): number[] {
  return mySolution1(root);
}

function walk(node: BinaryTree, acc: number, sums: number[]): number[] {
  acc += node.value;
  if (node.left) walk(node.left, acc, sums);
  if (node.right) walk(node.right, acc, sums);
  if (!node.left && !node.right) sums.push(acc);
  return sums;
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(root: BinaryTree): number[] {
  return walk(root, 0, []);
}

export default branchSums;
