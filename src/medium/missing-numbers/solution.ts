// Test: make test t=missing-numbers
function missingNumbers(nums: number[]): number[] {
  return mySolution1(nums); // time time O(n) | space O(n)
}

// ?? approach
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(nums: number[]): number[] {
  let numsSet = new Set(nums);
  let result: number[] = [];
  let i = 0;
  while ((++i <= nums.length + 2) && (result.length !== 2)) {
    if (!numsSet.has(i)) result.push(i);
  }
  return result;
}

export default missingNumbers;
