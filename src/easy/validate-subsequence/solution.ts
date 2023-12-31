// https://www.algoexpert.io/questions/validate-subsequence

export default function isValidSubsequence(array: number[], sequence: number[]) {
  return solution(array, sequence);
}

// time O(n) | O(1) space
function solution(array: number[], sequence: number[]) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
}

// My ideia: convert sequence to array of indexes, 
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

// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// -------------------------------
// loop i = 0
// position = 1
// sequence = [1, 6, -1, 10] // sequence[0] = 1
// array = [5, NaN, 22, 25, 6, -1, 8, 10] // array[1] = NaN
// -------------------------------
// loop i = 1
// position = 4
// sequence = [1, 4, -1, 10] // sequence[1] = 4
// array = [5, NaN, 22, 25, NaN, -1, 8, 10] // array[4] = NaN
// -------------------------------
// loop i = 2
// position = 5
// sequence = [1, 4, 5, 10] // sequence[2] = 5
// array = [5, NaN, 22, 25, NaN, NaN, 8, 10] // array[5] = NaN
// -------------------------------
// loop i = 3
// position = 7
// sequence = [1, 4, 5, 7] // sequence[3] = 7
// array = [5, NaN, 22, 25, NaN, NaN, 8, NaN] // array[7] = NaN
// -------------------------------
// sequence.indexOf(-1) == -1 ? true : false;
// true
