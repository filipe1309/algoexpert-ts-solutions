// https://www.algoexpert.io/questions/node-depths

function nodeDepths(root: BinaryTree) {
  return mySolution1(root);
}

function walk(node: BinaryTree | null, depth: number): number {
  if (node === null) return 0;
  return depth + walk(node.left, depth + 1) + walk(node.right, depth + 1);
}

// Complexity (worst-case): time O(n) | space O(h) h=height
function mySolution1(root: BinaryTree) {
  return walk(root, 0);
}

// Iterative | Stack
// Complexity (worst-case): time O(n) | space O(h) h=height
function solution1(root: BinaryTree | null) {
  if (!root) return 0;
  let acc = 0;
  let stack = [{node: root, depth: 0}];
  while (stack.length) {
    let nodeInfo = stack.pop();
    if (!nodeInfo) continue;
    const {node, depth} = nodeInfo;
    if (!node) continue;
    acc += depth;
    if (node.left) stack.push({node: node.left, depth: depth+1});
    if (node.right) stack.push({node: node.right, depth: depth+1});
  }

  return acc;
}

export default nodeDepths;
