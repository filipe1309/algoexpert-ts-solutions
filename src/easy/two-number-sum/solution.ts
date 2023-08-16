// https://www.algoexpert.io/questions/two-number-sum

/*
  Two Number Sum

  Write a function that takes in a non-empty array of distinct integers and an 
  integer representing a target sum. If any two numbers in the input array sum 
  up to the target sum, the function should return them in an array, in any order. 
  If no two numbers sum up to the target sum, the function should return an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the target sum.

  You can assume that there will be at most one pair of numbers summing up to the
  target sum.

  Sample Input
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10

  Sample Output
  [-1, 11] // the numbers could be in reverse order

  Hints
  Hint 1
  Try using two for loops to sum all possible pairs of numbers in the input array.
  What are the time and space implications of this approach?

  Hint 2
  Realize that for every number X in the input array, you are essentially trying to
  find a corresponding number Y such that X + Y = targetSum. With two variables in
  this equation known to you, it shouldn't be hard to solve for Y.

  Hint 3
  Try storing every number in a hash table, solving the equation mentioned in Hint #2
  for every number, and checking if the Y that you find is stored in the hash table.
  What are the time and space implications of this approach?

  Optimal Space & Time Complexity
  O(n) time | O(n) space - where n is the length of the input array
*/

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
