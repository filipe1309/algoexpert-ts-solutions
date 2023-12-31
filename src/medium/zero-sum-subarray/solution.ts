// Test: make test t=zero-sum-subarray
function zeroSumSubarray(nums: number[]): boolean {
  // return mySolution1(nums); // time O(n^2) | space O(n)
  return solution1(nums); // time O(n) | space O(n)
}

// Brute Force approach
// Complexity (worst-case): time O(n^2) | space O(n)
function mySolution1(nums: number[]): boolean {
  for (let num1 = 0; num1 < nums.length; num1++) {
    let sum: number[] = [];
    for (let num2 = num1; num2 < nums.length; num2++) {
      sum.push(nums[num2]);
      if (sum.reduce((prev, curr) => prev+curr) === 0) return true
    }
  }
  return false;
}

// Sums Set approach
// Complexity (worst-case): time O(n) | space O(n)
function solution1(nums: number[]): boolean {
  let sums = new Set([0]);
  let currSum = 0;
  for (let num of nums) {
    currSum += num;
    if (sums.has(currSum)) return true;
    sums.add(currSum);
  }
  return false;
}

export default zeroSumSubarray;
