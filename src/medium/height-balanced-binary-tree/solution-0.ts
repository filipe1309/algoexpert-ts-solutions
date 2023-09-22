
import BT from '../../common/BinaryTree';
type TreeInfo = { isHBBT: boolean }

// ?? approach
// Complexity (worst-case): time O(??) | space O(??)
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
