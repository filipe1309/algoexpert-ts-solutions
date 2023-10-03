// Math Permutation Formula approach
// The number of ways to traverse a graph is the number of permutations
// of the directions (right and down) that we can take to get to the bottom
// right corner. We can calculate the number of permutations using the
// following formula:
// n! / (n - r)! * r!
// where n = xDistanceToCorner + yDistanceToCorner
//       r = xDistanceToCorner
// We can simplify this formula to:
// (n + r)! / (n! * r!)
// where n = xDistanceToCorner + yDistanceToCorner
//       r = xDistanceToCorner
// Complexity (worst-case): O(n + m) time | O(1) space
function numberOfWaysToTraverseGraph(width: number, height: number): number {
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;

  const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);

  return numerator / denominator;
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export { numberOfWaysToTraverseGraph as solution2 };
