// Recursive approach
// Complexity (worst-case): O(k^kn) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  return numberOfWaysToTop(height, maxSteps)
}

function numberOfWaysToTop(height: number, maxSteps: number) {
  if (height <= 1) return 1;

  let numberOfWays = 0;
  for (let step = 1; step <= Math.min(maxSteps, height); step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps);
  }

  return numberOfWays;
}


export { staircaseTraversal as solution1 };
