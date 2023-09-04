// Test: make test t=smallest-difference
function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
  return mySolution1(arrayOne, arrayTwo); // time O(n^2) | space O(1)
}

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

export default smallestDifference;
