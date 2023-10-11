// Compare Paths approach
// Complexity (worst-case): O(n^2) time | O(n) space
function youngestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  const pathOne = buildPathToTopAncestor(descendantOne);
  const pathTwo = buildPathToTopAncestor(descendantTwo);
  
  const pathTwoNames = pathTwo.map((n) => n.name)
  for (let node of pathOne) {
    if (pathTwoNames.includes(node.name)) return node;
  }
  return topAncestor;
}

function buildPathToTopAncestor(descendant: AncestralTree): AncestralTree[] {
  let node = descendant
  const path = [node];
  while (node.ancestor) {
    node = node.ancestor
    path.push(node);
  }

  return path;
}

export { youngestCommonAncestor as solution0 };
