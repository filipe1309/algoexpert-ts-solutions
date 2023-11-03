// Tree Traversal && Array Of Sums approach
// Complexity (worst-case): O(n^k) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  return sTHelper([], height, maxSteps)
}

function sTHelper(currSum: number[], height: number, maxSteps: number) {
  const currTotal = currSum.reduce((p, v) => p + v, 0)
  if (currTotal === height) return 1;
  if (currTotal > height) return 0;
  
  let sum = 0;
  for (let i = 1; i <= maxSteps; i++) {
    currSum.push(i);
    sum += sTHelper(currSum, height, maxSteps);
    currSum.pop();
  }

  return sum;
}

export { staircaseTraversal as solution0 };
