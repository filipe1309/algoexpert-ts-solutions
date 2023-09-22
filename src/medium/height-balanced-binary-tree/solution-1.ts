
class TreeInfo { 
  isBalanced: boolean; 
  height: number;
  constructor(isBalanced: boolean, height: number) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}


// DFS + Get Height approach
// Complexity (worst-case): time O(n) | space O(h)
// where n = number of nodes in the tree
// and h = height of the tree
function heightBalancedBinaryTree(tree: BinaryTree) {
  return getTreeInfo(tree).isBalanced;
}

function getTreeInfo(node: BinaryTree | null): TreeInfo {
  if (!node) return new TreeInfo(true, -1);
  const left = getTreeInfo(node.left);
  const right = getTreeInfo(node.right);
  const isBalance = left.isBalanced && right.isBalanced &&
    Math.abs(left.height - right.height) <= 1;
  const currHeight = Math.max(left.height, right.height) + 1 
  return new TreeInfo(isBalance, currHeight);
}

export default heightBalancedBinaryTree;
