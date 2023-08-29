// Test: make test t=insertion-sort
function insertionSort(array: number[]): number[] {
  return mySolution1(array); // time O(n^2) | space O(1)
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j && array[j] < array[j-1]) {
      swap(array, j, j-1);
      j--;
    }
  }

  return array;
}

function swap (array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}

export default insertionSort;
