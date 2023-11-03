// ?? approach
// Complexity (worst-case): O(n^k) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  const total: number[] = [];
  staircaseTraversalHelper([], height, maxSteps, total)
  return total.length;
}

function staircaseTraversalHelper(currSum: number[], height: number, maxSteps: number, total: number[]) {
  const currTotal = currSum.reduce((p, v) => p + v, 0)
  if (currTotal === height) { total.push(1); return; }
  else if (currTotal > height) return;

  for (let i = 1; i <= maxSteps; i++) {
    currSum.push(i);
    staircaseTraversalHelper(currSum, height, maxSteps, total);
    currSum.pop();
  }
}

export { staircaseTraversal as solution0 };
