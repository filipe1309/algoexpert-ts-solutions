// https://www.algoexpert.io/questions/sorted-squared-array

/*
  Sorted Squared Array

  Write a function that takes in a non-empty array of integers that are sorted in ascending order
  and returns a new array of the same length with the squares of the original integers also sorted
  in ascending order.

  Sample Input
  array = [1, 2, 3, 5, 6, 8, 9]

  Sample Output
  [1, 4, 9, 25, 36, 64, 81]
*/

export default function sortedSquaredArray(array: number[]) {
  return array.map(num => num*num).sort((a, b) => a - b);
}

