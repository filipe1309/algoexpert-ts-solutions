// Test: make test t=bubble-sort
function bubbleSort(array: number[]) {
  return mySolution1(array); // time O(n^2) | space O(1)
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        const tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  return array;
}

export default bubbleSort;
