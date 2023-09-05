// Test: make test t=monotonic-array
function isMonotonic(array: number[]): boolean {
  return mySolution1(array); // time O() | space O()
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

export default isMonotonic;
