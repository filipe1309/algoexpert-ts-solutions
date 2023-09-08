// Test: make test t=merge-overlapping-intervals
function mergeOverlappingIntervals(array: number[][]): number[][] {
  return mySolution1(array); // time O(n^2) | space O(1)
}

// Brute Force approach
// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[][]): number[][] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i][1] >= array[j][0] && array[i][0] <= array[j][1]) {
        const mergedIntervals = [Math.min(array[i][0], array[j][0]), Math.max(array[i][1], array[j][1])];
        array[i] = mergedIntervals;
        array[j] = [Infinity, -Infinity];
      }
    }
  }

  return array.filter((interval) => interval[0] !== Infinity)
}

export default mergeOverlappingIntervals;
