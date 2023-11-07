// Tree Traversal && Array Of Sums approach
// Complexity (worst-case): O(k^kn) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  return sTHelper([], height, maxSteps)
}

function sTHelper(currSum: number[], height: number, maxSteps: number) {
  // calculate current sum
  const currTotal = currSum.reduce((p, v) => p + v, 0)

  // base cases
  if (currTotal === height) return 1;
  if (currTotal > height) return 0;
  
  // push current step to currSum
  // calculate sum of all possible steps
  // pop current step from currSum to backtrack
  let sum = 0;
  for (let i = 1; i <= maxSteps; i++) {
    currSum.push(i);
    sum += sTHelper(currSum, height, maxSteps);
    currSum.pop();
  }

  return sum;
}

export { staircaseTraversal as solution0 };
