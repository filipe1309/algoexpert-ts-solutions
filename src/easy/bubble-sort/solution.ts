// Test: make test t=bubble-sort
function bubbleSort(array: number[]) {
  return mySolution1(array); // time O(n^2) | space O(1)
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[]) {
  let isSorted = false;
  for (let i = 0; i < array.length; i++) {
    if (isSorted) break;
    isSorted = true;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j + 1);
        isSorted = false;
      }
    }
  }
  return array;

  function swap (array: number[], i: number, j: number) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default bubbleSort;
