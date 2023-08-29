// Test: make test t=selection-sort
function selectionSort(array: number[]) {
  return mySolution1(array); // time O(n^2) | space O(1)
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestPos = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestPos]) smallestPos = j;
    }
    swap(array, i, smallestPos);
  }

  return array;
}

function swap (array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}

export default selectionSort;
