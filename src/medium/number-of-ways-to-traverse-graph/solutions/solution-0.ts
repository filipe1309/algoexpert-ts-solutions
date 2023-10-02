// Recursive Sub W && H approach
// Complexity (worst-case): O(2^(W+H)) time | O(W+H) space
// where W = width, H = height
function numberOfWaysToTraverseGraph(width: number, height: number): number {
  if (width === 1 && height === 1) return 1;
  let resultW = width > 1 ? numberOfWaysToTraverseGraph(width - 1, height) : 0;
  let resultH = height > 1 ? numberOfWaysToTraverseGraph(width, height - 1) : 0;
  return resultW + resultH;
}

export { numberOfWaysToTraverseGraph as solution0 };
