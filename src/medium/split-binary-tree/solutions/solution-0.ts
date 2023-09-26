import BT from '../../../common/BinaryTree'

type TreeInfo = { value: number }

// DFS InOrder Total + PostOrder Find approach
// Complexity (worst-case): time O(n) | space O(h)
function splitBinaryTree(tree: BinaryTree): number {
  let sum = 0;
  let totalSum = dfsInOrder(tree);
  const result: TreeInfo = { value: 0 }
  if (totalSum % 2 === 0) sum = dfsPostOrder(tree, totalSum/2, result);
  return result.value;
}

function dfsInOrder(tree: BinaryTree | null): number {
  if (!tree) return 0;
  return tree.value + dfsInOrder(tree.left) + dfsInOrder(tree.right);
}

function dfsPostOrder(tree: BinaryTree | null, needle: number, result: TreeInfo): number {
  if (!tree) return 0;
  const left = dfsPostOrder(tree.left, needle, result);
  const right = dfsPostOrder(tree.right, needle, result);
  if (tree.value + left + right === needle) result.value = needle;
  return tree.value + left + right;
}

export { splitBinaryTree as solution0 };
