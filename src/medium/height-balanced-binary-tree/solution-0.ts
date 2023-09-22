
import BT from '../../common/BinaryTree';
type TreeInfo = { isHBBT: boolean }

// DFS + Get Height approach
// Complexity (worst-case): time O(n) | space O(h)
// where n = number of nodes in the tree
// and h = height of the tree
function heightBalancedBinaryTree(tree: BT): boolean {
  const treeInfo = { isHBBT: true }
  getHeight(tree, treeInfo)
  return treeInfo.isHBBT;
}

function getHeight(tree: BT, treeInfo: TreeInfo): number {
  const left = tree.left ? getHeight(tree.left, treeInfo) : 0 ;
  const right = tree.right ? getHeight(tree.right, treeInfo) : 0;
  if (Math.abs(left - right) > 1) treeInfo.isHBBT = false;
  return Math.max(left, right) + 1;
}

export default heightBalancedBinaryTree;
