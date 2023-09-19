class TreeInfo {
  diameter: number;
  height: number;
  constructor(diameter: number, height: number) {
    this.diameter = diameter;
    this.height = height;
  }
}

// Recursive Diameter Height approach
// Complexity (worst-case): time O(n) | space O(n)
function binaryTreeDiameter(tree: BinaryTree): number {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree: BinaryTree | null) {
  if (!tree) return new TreeInfo(0, 0);
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  const longestPathThroughRoot = leftTreeInfo!.height + rightTreeInfo!.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo!.diameter, rightTreeInfo!.diameter);
  const currDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currHeight: number = 1 + Math.max(leftTreeInfo!.height, rightTreeInfo!.height);

  return new TreeInfo(currDiameter, currHeight);
}


export default binaryTreeDiameter;
