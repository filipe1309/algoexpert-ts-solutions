// https://www.algoexpert.io/questions/two-number-sum

export default function twoNumberSum(array: number[], targetSum: number) {
  return mySolution1(array, targetSum);
}

  // time O(nˆ2) | O(1) space
  function mySolution1(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    for (let i2 = i + 1; i2 < array.length; i2++) {
        if ((array[i] + array[i2]) == targetSum) return [array[i], array[i2]];
    }
  }
  return [];
}

  // O(n) time, O(n) space
  function mySolution2(array: number[], targetSum: number) {
  const hash: {[key: number]: boolean} = {}
  for (const num of array) {
    // X + Y = targetSum -> Y = targetSUm - X
    const y = targetSum - num;
    if (hash[y] !== undefined) {
      return [y, num];
    }
    hash[num] = true;
  }
  
  return [];
}

// O(nlog(n)) time, O(1) space
function solution3(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left++;
    } else if (sum > targetSum) {
      right--;
    }
  }
  return [];
}
