import BT from '../../common/BinaryTree';

// Insert Invert Second Tree approach
// Complexity (worst-case): time O(n) | space O(n)
function invertBinaryTree(tree: BT | null): BT | null {
  if (!tree) return null;
  tree = Object.assign(tree, walk(tree));
  return tree;
}

function walk(bt: BT | null, invertedBT: BT | null = null): BT | null {
  if (!bt) return invertedBT;
  if (!invertedBT) invertedBT = new BT(bt.value)
  if(bt.left) invertedBT.right = walk(bt.left, invertedBT.right)
  if(bt.right) invertedBT.left = walk(bt.right, invertedBT.left)
  return invertedBT;
}

export default invertBinaryTree;
