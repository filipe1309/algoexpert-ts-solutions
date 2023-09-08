// Test: make test t=first-duplicate-value
function firstDuplicateValue(array: number[]): number {
  return mySolution1(array); // time O(n) | space O(n)
  // return mySolution2(array); // time O(n^2) | space O(1)
}

// Hash approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[]): number {
  const hash = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    if (hash.get(array[i]) === 1) return array[i];
    hash.set(array[i], (hash.get(array[i]) ?? 0) + 1)
  }
  return -1;
}

// Brute Force approach
// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution2(array: number[]): number {
  let duplicatedPos = -1;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (duplicatedPos === -1 || j < duplicatedPos) duplicatedPos = j;
      }
    }
  }
  return array[duplicatedPos] ?? -1;
}

export default firstDuplicateValue;
