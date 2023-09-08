// Test: make test t=first-duplicate-value
function firstDuplicateValue(array: number[]): number {
  return mySolution1(array); // time O(n) | space O(n)
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[]): number {
  const hash = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    if (hash.get(array[i]) === 1) return array[i];
    hash.set(array[i], (hash.get(array[i]) ?? 0) + 1)
  }
  return -1;
}

export default firstDuplicateValue;
