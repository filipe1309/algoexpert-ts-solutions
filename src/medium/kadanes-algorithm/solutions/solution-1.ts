// Array Of Accumulative Sums approach
// Complexity (worst-case): O(n) time | O(n) space
function kadanesAlgorithm(array: number[]): number {
  const accArray: number[] = Array(array.length).fill(0);
  accArray[0] = array[0];
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    accArray[i] = Math.max(array[i] + accArray[i-1], array[i]);
    maxSum = Math.max(maxSum, accArray[i])
  }
  return maxSum;
}

export { kadanesAlgorithm as solution1 };
