// Test: make test t=majority-element
function majorityElement(array: number[]): number {
  // return mySolution1(array); // time O(nlogn) | space O(1)
  return solution1(array); // time O(n) | space O(1)
  // return solution2(array); // time O(n) | space O(1)
  // return solution3(array); // time O(n) | space O(1)
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

// Bitwise approach
// Complexity (worst-case): time O(n) | space O(1)
// Explanation: 
// 1. We iterate through each bit of the number
// 2. We count the number of 1s in that bit
// 3. If the number of 1s is greater than the half of the array length, we set that bit to 1
// 4. We return the number
function solution2(array: number[]): number {
  let answer = 0;
  for (let currentBit = 0; currentBit < 32; currentBit++) {
    let currentBitValue = 1 << currentBit;
    let onesCount = 0;
    for (let num of array) {
      if (num & currentBitValue) onesCount++;
    }

    if (onesCount > array.length / 2) answer |= currentBitValue;
  }

  return answer;
}

// Bitwise v2 approach
// Complexity (worst-case): time O(n) | space O(1)
function solution3(array: number[]): number {
  let answer = 0;
  for (let currentBit = 0; currentBit < 32; currentBit++) {
    let count = 0;
    for (let num of array) {
      if ((num >> currentBit) & 1) count++;
    }

    if (count > array.length / 2) answer |= 1 << currentBit;
  }

  return answer;
}

export default majorityElement;
