// Recursive Fib MaxStepsSize approach
// Complexity (worst-case): O(k ^ n) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  return numberOfWaysToTop(height, maxSteps)
}

function numberOfWaysToTop(height: number, maxSteps: number) {
  // If the height is less than or equal to 1, there's only 1 way to climb it
  if (height <= 1) return 1;

  // Initialize the number of ways to climb the stairs to 0
  let numberOfWays = 0;

  // For each step, calculate the number of ways to get to the top
  for (let step = 1; step <= Math.min(maxSteps, height); step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps);
  }

  return numberOfWays;
}


export { staircaseTraversal as solution1 };
