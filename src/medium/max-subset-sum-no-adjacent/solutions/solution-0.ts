// ?? approach
// Complexity (worst-case): time O(??) | space O(??)
function maxSubsetSumNoAdjacent(array: number[]): number {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) return Math.max(array[0], array[1]);
  if (array.length === 3) return Math.max(array[0] + array[2], array[1]);

  return array[0] + Math.max(
    maxSubsetSumNoAdjacent(array.slice(2)), 
    maxSubsetSumNoAdjacent(array.slice(3))
  );
}

export { maxSubsetSumNoAdjacent as solution0 };
