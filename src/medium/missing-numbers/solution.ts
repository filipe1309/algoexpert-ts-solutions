// Test: make test t=missing-numbers
function missingNumbers(nums: number[]): number[] {
  // return mySolution1(nums); // time time O(n) | space O(n)
  return solution1(nums); // time time O(n) | space O(1)
  // return solution2(nums); // time time O(n) | space O(1)
}

// Set approach
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

// Average approach
// Complexity (worst-case): time O(n) | space O(1)
function solution1(nums: number[]): number[] {
  // Math sum all nums 1..n = n*(n+1)/2
  let fullSize = nums.length + 2; 
  let total = (fullSize * (fullSize + 1)) / 2;
  total -= nums.reduce((prev, curr) => prev + curr, 0);
  let averageMissingValues = Math.floor(total / 2);

  let foundFirst = 0;
  let foundSecond = 0;
  for (let num of nums) { 
    if (num <= averageMissingValues) foundFirst += num;
    else foundSecond += num;
  }

  let expectedFirst = (averageMissingValues * (averageMissingValues +  1)) / 2
  let expectedSecond = ((fullSize * (fullSize + 1)) / 2) - expectedFirst;

  return [expectedFirst - foundFirst, expectedSecond - foundSecond];
}

// XOR approach
// Complexity (worst-case): time O(n) | space O(1)
function solution2(nums: number[]): number[] {
  let solutionXOR = 0;
  for (let i = 0; i <= nums.length + 2; i++) { 
    solutionXOR ^= i; 
    if (i < nums.length) solutionXOR ^= nums[i];
  }

  let solution = [0, 0];
  let setBit = solutionXOR & -solutionXOR;
  for (let i = 0; i <= nums.length + 2; i++) {
    if ((i & setBit) === 0) solution[0] ^= i;
    else solution[1] ^= i;

    if (i < nums.length)
      if ((nums[i] & setBit) === 0) solution[0] ^= nums[i];
      else solution[1] ^= nums[i];
  }

  return solution.sort((a, b) => a - b)
}


export default missingNumbers;
