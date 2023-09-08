// Test: make test t=first-duplicate-value
function firstDuplicateValue(array: number[]): number {
  // return mySolution1(array); // time O(n) | space O(n)
  // return mySolution2(array); // time O(n^2) | space O(1)
  return solution2(array); // time O(n) | space O(n)
  // return solution3(array); // time O(n) | space O(1)
}

// Hash approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[]): number {
  const hash = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    if (hash.get(array[i])) return array[i];
    hash.set(array[i], 1)
  }
  return -1;
}

// Brute Force approach
// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution2(array: number[]): number {
  let minDuplicatedIdx = Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) minDuplicatedIdx = Math.min(minDuplicatedIdx, j);
    }
  }
  return array[minDuplicatedIdx] ?? -1;
}

// Set approach
// Complexity (worst-case): time O(n) | space O(n)
function solution2(array: number[]): number {
  const seen = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) return array[i];
    seen.add(array[i]);
  }
  return -1;
}

export default firstDuplicateValue;
