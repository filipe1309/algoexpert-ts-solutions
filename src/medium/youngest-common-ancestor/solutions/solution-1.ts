// Set approach
// Complexity (worst-case): O(n) time | O(n) space
function youngestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  const setOne = new Set(descendantOne.name);
  let nodeOne = descendantOne
  while (nodeOne.ancestor) {
    nodeOne = nodeOne.ancestor
    setOne.add(nodeOne.name);
  }
  let nodeTwo = descendantTwo
  while (nodeTwo.ancestor) {
    if (setOne.has(nodeTwo.name)) return nodeTwo;
    nodeTwo = nodeTwo.ancestor
  }
  
  return topAncestor;
}

export { youngestCommonAncestor as solution1 };
