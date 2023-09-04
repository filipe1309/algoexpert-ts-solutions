// Test: make test t=smallest-difference
function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
  // return mySolution1(arrayOne, arrayTwo); // time O(n^2) | space O(1)
  return solution2(arrayOne, arrayTwo); // time O(nlog(n) + mlog(m)) | space O(1)
}

// Brute force approach
// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(arrayOne: number[], arrayTwo: number[]) {
  let result: number[] = [arrayOne[0], arrayTwo[0]];
  let minDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
  for (let item1 of arrayOne) {
    for (let item2 of arrayTwo) {
      let currMinDiff = Math.abs(item1 - item2);
      if (currMinDiff < minDiff) {
        minDiff = currMinDiff;
        result = [item1, item2]
      }
    }
  }
  return result;
}

// Two pointers approach
// Complexity (worst-case): time O(nlog(n) + mlog(m)) | space O(1)
// where n is the length of arrayOne and m is the length of arrayTwo
function solution2(arrayOne: number[], arrayTwo: number[]) {
  let result: number[] = [];
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let minDiff = Infinity;
  let pOne = 0;
  let pTwo = 0;
  while (pOne < arrayOne.length && pTwo < arrayTwo.length) {
    let currMinDiff = Math.abs(arrayOne[pOne] - arrayTwo[pTwo]);
    if (currMinDiff < minDiff) {
      minDiff = currMinDiff;
      result = [arrayOne[pOne], arrayTwo[pTwo]];
    }
    if (arrayOne[pOne] < arrayTwo[pTwo]) pOne++; else pTwo++;
  }

  return result;
}

export default smallestDifference;
