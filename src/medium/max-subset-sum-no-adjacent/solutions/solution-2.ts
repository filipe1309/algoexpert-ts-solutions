// 2 Vars of Sums approach
// Complexity (worst-case): time O(n) | space O(1)
// maxSums[i] = Max(maxSums[i - 1], maxSums[i - 2] + array[i])
// maxSums[i] = Max(first, second + array[i])
function maxSubsetSumNoAdjacent(array: number[]): number {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  
  let second = array[0];
  let first = Math.max(array[0],array[1])
  let curr = 0;

  for (let i = 2; i < array.length; i++) {
    curr = Math.max(first, second + array[i])
    second = first;
    first = curr;
  }

  return first;
}

export { maxSubsetSumNoAdjacent as solution2 };
