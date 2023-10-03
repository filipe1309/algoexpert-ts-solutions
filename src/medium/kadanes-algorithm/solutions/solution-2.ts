// Vars Of Accumulative Sums approach
// Complexity (worst-case): O(n) time | O(1) space
function kadanesAlgorithm(array: number[]): number {
  let lastAcc = array[0];
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    lastAcc = Math.max(array[i] + lastAcc, array[i]);
    maxSum = Math.max(maxSum, lastAcc)
  }
  return maxSum;
}

export { kadanesAlgorithm as solution2 };
