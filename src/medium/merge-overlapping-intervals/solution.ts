// Test: make test t=merge-overlapping-intervals
function mergeOverlappingIntervals(array: number[][]): number[][] {
  // return mySolution1(array); // time O(n^2) | space O(1)
  return solution1(array); // time O(nlogn) | space O(n)
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
 // Sorting approach
// Complexity (worst-case): time O(nlogn) | space O(n)
function solution1(array: number[][]): number[][] {
  let result: number[][] = [];
  array.sort((a, b) => a[0] - b[0]);
  let currInterval = array[0]
  result.push(currInterval);
  for (let nextInterval = 1; nextInterval < array.length; nextInterval++) {
    if (isOverlaping(currInterval, array[nextInterval])) {
      currInterval[1] = Math.max(currInterval[1], array[nextInterval][1]);
    } else {
      currInterval = array[nextInterval];
      result.push(currInterval);
    }
  }

  return result
}

function isOverlaping(array1: number[], array2: number[]): boolean {
  return array1[1] >= array2[0];
}

export default mergeOverlappingIntervals;
