import { BST } from "./solution"

class TreeInfo {
  rootIdx: number;

  constructor(rootIdx: number) {
    this.rootIdx = rootIdx;
  }
}

// Lower Upper Bounds approach
// Complexity (worst-case): time O(n) | space O(n)
function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  let treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(
  lowerBound: number,
  upperBound: number,
  preOrderTraversalValues: number[],
  currSubtreeInfo: TreeInfo
) : BST | null
{
  if (currSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;
  let rootValue = preOrderTraversalValues[currSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null
  currSubtreeInfo.rootIdx++;
  let leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currSubtreeInfo);
  let rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currSubtreeInfo);
  return new BST(rootValue, leftSubtree, rightSubtree);
}

export default reconstructBst;
