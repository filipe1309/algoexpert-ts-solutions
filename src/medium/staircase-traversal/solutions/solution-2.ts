// Recursive Fib MaxStepsSize + Memoization approach
// Complexity (worst-case): O(n * k) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  return numberOfWaysToTop(height, maxSteps, {0: 1, 1: 1})
}

// Returns the number of ways to reach the top of the staircase.
function numberOfWaysToTop(height: number, maxSteps: number, memoize: {[height: number]: number}) {
  // If we've already calculated the number of ways to reach this height,
  // just return the value from the memo.
  if (height in memoize) return memoize[height];

  // Otherwise, we need to calculate the number of ways to reach the top
  // of the staircase from the current height.
  let numberOfWays = 0;
  for (let step = 1; step <= Math.min(maxSteps, height); step++) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize);
  }
  // Save the number of ways for future calculations. 
  memoize[height] = numberOfWays;

  return numberOfWays;
}

export { staircaseTraversal as solution2 };
