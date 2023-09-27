// Array of Sums approach
// Complexity (worst-case): time O(n) | space O(n)
// maxSums[i] = Max(maxSums[i - 1], maxSums[i - 2] + array[i])
// maxSums[i] = Max(last, second + array[i])
function maxSubsetSumNoAdjacent(array: number[]): number {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  
  const maxSums = array;
  maxSums[1] = Math.max(array[0],array[1])

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
  }

  return maxSums.at(-1)|| 0;
}

export { maxSubsetSumNoAdjacent as solution1 };
