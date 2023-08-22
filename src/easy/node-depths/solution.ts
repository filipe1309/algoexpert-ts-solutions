// https://www.algoexpert.io/questions/node-depths

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
function solution1(root: BinaryTree) {
  let acc = 0;
  let stack = [{node: root, depth: 0}];
  while (stack.length) {
    let nodeInfo = stack.pop();
    const {node, depth} = nodeInfo;
    if (!node) continue;
    acc += depth;
    stack.push({node: node.left, depth: depth+1});
    stack.push({node: node.right, depth: depth+1});
  }

  return acc;
}

export default nodeDepths;
