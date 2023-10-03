// Force Brute approach
// Complexity (worst-case): O(n^2) time | O(1) space
function kadanesAlgorithm(array: number[]): number {
  let maxSum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let currSum = 0
    for (let j = i; j < array.length; j++) {
      currSum += array[j];
      maxSum = Math.max(currSum, maxSum);
    }
  }
  return maxSum;
}

export { kadanesAlgorithm as solution0 };
