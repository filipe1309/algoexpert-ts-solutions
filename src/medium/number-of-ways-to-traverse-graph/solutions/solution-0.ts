// Recursive DFS Sub W && H approach
// With this approach the botton right will always be when width and height
// are equal to 1, so we just need to count how many times this happens.
// Complexity (worst-case): O(2^(W+H)) time | O(W+H) space
// where W = width, H = height
function numberOfWaysToTraverseGraph(width: number, height: number): number {
  if (width === 1 || height === 1) return 1;
  return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}

export { numberOfWaysToTraverseGraph as solution0 };
