// Test: make test t=majority-element
function majorityElement(array: number[]): number {
  return mySolution1(array); // time O(nlogn) | space O(1)
}

// Sorting approach
// Complexity (worst-case): time O(nlogn) | space O(1)
function mySolution1(array: number[]): number {
  array.sort((a, b) => a - b);
  let currMajority = array[0];
  let maxCount = 0;
  let currCount = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) currCount++;
    else {
      if (currCount > maxCount) {
        currMajority = array[i];
        maxCount = currCount;
      }
      currCount = 1;
    }
  }
  return currMajority;
}

export default majorityElement;
