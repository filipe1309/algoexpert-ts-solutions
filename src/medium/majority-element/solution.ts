// Test: make test t=majority-element
function majorityElement(array: number[]): number {
  return mySolution1(array); // time O(nlogn) | space O(1)
}

// Sorting approach
// Complexity (worst-case): time O(nlogn) | space O(1)
function mySolution1(array: number[]): number {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length/2)];
}

export default majorityElement;
