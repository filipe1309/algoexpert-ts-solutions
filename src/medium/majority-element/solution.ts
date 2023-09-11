// Test: make test t=majority-element
function majorityElement(array: number[]): number {
  // return mySolution1(array); // time O(nlogn) | space O(1)
  return solution1(array); // time O(nlogn) | space O(1)
}

// Sorting approach
// Complexity (worst-case): time O(nlogn) | space O(1)
function mySolution1(array: number[]): number {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length/2)];
}

// Count Answer approach
// Complexity (worst-case): time O(n) | space O(1)
function solution1(array: number[]): number {
  let count = 0;
  let answer = -1;
  for (let num of array) {
    if (count === 0) answer = num;
    if (num === answer) count++;
    else count--;
  }

  return answer;
}

export default majorityElement;
