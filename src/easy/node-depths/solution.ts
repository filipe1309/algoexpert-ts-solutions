// https://www.algoexpert.io/questions/node-depths

/*
  Node Depths

  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.

  Each BinaryTree node has an integer value, a left child node, and a right
  child node. Children nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
  tree =     1
          /     \
        2       3
      /   \    /   \
    4     5  6     7
  /   \  /
  8    9 10

  Sample Output
  16
  // The depth of the node with value 2 is 1.
  // The depth of the node with value 3 is 1.
  // The depth of the node with value 4 is 2.
  // The depth of the node with value 5 is 2.
  // Etc..
  // Summing all of these depths yields 16.
*/

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
