// Sliding Window approach
// Complexity (worst-case): O(n) time | O(n) space
// where n = height, k = maxSteps
function staircaseTraversal(height: number, maxSteps: number) {
  let currNumberOfWays = 0;
  const waysToTop = [1];

  for (let currHeight = 1; currHeight < height + 1; currHeight++) {
    const startPrevWindow = currHeight - maxSteps - 1;
    const endWindow = currHeight - 1;
    if (startPrevWindow >= 0) currNumberOfWays -= waysToTop[startPrevWindow];
    currNumberOfWays += waysToTop[endWindow];
    waysToTop.push(currNumberOfWays);
  }

  return waysToTop[height];
}

export { staircaseTraversal as solution4 };
