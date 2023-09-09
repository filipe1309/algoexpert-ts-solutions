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
  for (let i = 0; i < array.length; i++) {
    let next = i + 1;
    while (next < array.length && isOverlaping(array, i , next)) {
      array[i] = genNewInterval(array, i, next++);
    }
    result.push(array[i]);
    if (next !== (i + 1)) { i = next - 1;}
  }

  return result
}

function isOverlaping(array: number[][], i: number, j: number): boolean {
  return array[i][1] >= array[j][0];
}

function genNewInterval(array: number[][], i: number, j: number): number[] {
  return [array[i][0], Math.max(array[i][1], array[j][1])]
}

export default mergeOverlappingIntervals;
