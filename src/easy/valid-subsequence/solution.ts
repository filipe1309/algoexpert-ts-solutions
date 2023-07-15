/*
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array
  [1, 2, 3, 4], and so do the numbers [2, 4]. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Sample Output
true

Hints
Hint 1
*/

export default function isValidSubsequence(array: number[], sequence: number[]) {
  return mySolution1(array, sequence);
}

//  My ideia: convert sequence to array of indexes, 
// while doing that, check if the previous index is 
// smaller than the current one (sorted)
function mySolution1(array: number[], sequence: number[]) {
  for (let i = 0; i < sequence.length; i++) {
    const position = array.indexOf(sequence[i]);
    sequence[i] = position;
    array[position] = NaN;
    if (i > 0 && sequence[i-1] > position) return false;
  }

  return sequence.indexOf(-1) == -1 ? true : false;
}
