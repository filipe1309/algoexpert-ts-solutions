// Iterative Fib MaxStepsSize approach
// Complexity (worst-case): O(n * k) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  const waysToTop: number[] = new Array(height + 1).fill(0);
  waysToTop[0] = waysToTop[1] = 1;

  for (let currHeight = 2; currHeight < height + 1; currHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currHeight) {
      waysToTop[currHeight] += waysToTop[currHeight - step++];
    }
  }

  return waysToTop[height];
}


export { staircaseTraversal as solution3 };
