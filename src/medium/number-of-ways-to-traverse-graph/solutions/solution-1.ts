// Track Intermediate Matrix Answers approach
// Complexity (worst-case): O(n * m) time | O(n * m) space
function numberOfWaysToTraverseGraph(width: number, height: number): number {
  const numberOfWays = Array(height).fill(null).map(() => Array(width).fill(0));

  for (let widthIdx = 0; widthIdx < width; widthIdx++) {
    for (let heightIdx = 0; heightIdx < height; heightIdx++) {
      if (widthIdx === 0 || heightIdx === 0) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        const waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }

  return numberOfWays.at(-1)!.at(-1);
}

export { numberOfWaysToTraverseGraph as solution1 };
