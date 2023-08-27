// Test: make test-one t=binary-search
function binarySearch(array: number[], target: number): number {
  // return mySolution1(array, target); // time O(n) | space O(1)
  // return mySolution2(array, target); // time O(logn) | space O(logn)
  return mySolution3(array, target); // time O(logn) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(array: number[], target: number) {
  return array.indexOf(target);
}

// Recursive
// Complexity (worst-case): time O(logn) | space O(logn)
function mySolution2(array: number[], target: number): number {
  return myBS(array, target, 0, array.length-1);
}

function myBS(array: number[], target: number, begin: number, end: number): number {
  const middle = Math.floor((begin+end)/2);

  if (target === array[middle]) return middle;
  if (end <= begin) return -1;

  if (target < array[middle]) return myBS(array, target, begin, middle-1);
  return myBS(array, target, middle+1, end);
}

// Iterative
// Complexity (worst-case): time O(logn) | space O(1)
function mySolution3(array: number[], target: number): number {
  let begin = 0;
  let end = array.length - 1;
  
  while (end >= begin) {
    const middle = Math.floor((begin+end)/2);
    if (target === array[middle]) return middle;
    if (target < array[middle]) end = middle-1; else begin = middle + 1;
  }

  return -1;
}

export default binarySearch;
