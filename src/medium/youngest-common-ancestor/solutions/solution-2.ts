// Equalize Levels (Depth) && Backtrack approach
// Complexity (worst-case): O(d) time | O(1) space
function youngestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  let depthOne = getDepth(descendantOne, topAncestor);
  let depthTwo = getDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAT(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return backtrackAT(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function backtrackAT(
  lowerDecendant: AncestralTree, 
  higherDecendant: AncestralTree, 
  diff: number
) {
  while (diff > 0) {
    lowerDecendant = lowerDecendant.ancestor!;
    diff--;
  }
  while (lowerDecendant !== higherDecendant) {
    lowerDecendant = lowerDecendant.ancestor!;
    higherDecendant = higherDecendant.ancestor!;
  }
  return lowerDecendant;
}

function getDepth(descendant: AncestralTree, topAncestor: AncestralTree): number {
  let depth = 0;
  while (descendant !== topAncestor) { 
    descendant = descendant.ancestor!; 
    depth++; 
  }
  return depth;
}

export { youngestCommonAncestor as solution2 };
