// Test: make test t=monotonic-array
function isMonotonic(array: number[]): boolean {
  // return mySolution1(array); // time O(n) | space O(1)
  // return solution1(array); // time O(n) | space O(1)
  return solution2(array); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(array: number[]): boolean {
  if (array.length < 2) return true;
  let isIncreasing = false;
  let pos = 1;
  while (pos < array.length) {
    if (array[0] !== array[pos]) { isIncreasing = array[0] < array[pos]; break; }
    pos++;
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (isIncreasing && array[i] > array[i+1]) return false;
    else if (!isIncreasing && array[i] < array[i+1]) return false;
  }
  return true;
}

// Complexity (worst-case): time O(n) | space O(1)
function solution1(array: number[]): boolean {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 1; i < array.length; i++) {
    if (direction === 0) { direction = array[i] - array[i - 1]; continue; }
    if (breaksDirection(direction, array[i - 1], array[i])) return false
  }
  return true;
}

function breaksDirection(dir: number, prev: number, curr: number): boolean {
  let diff = curr - prev;
  if (dir > 0) return diff < 0;
  return diff > 0;
}

// Complexity (worst-case): time O(n) | space O(1)
function solution2(array: number[]): boolean {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}



export default isMonotonic;
