type Triplet = [number, number, number];

// Test: make test t=three-number-sum
function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // return mySolution1(array, targetSum); // time O(n^3) | space O(n)
  return solution1(array, targetSum); // time O(n^2) | space O(n)
}

// Brute force
// Complexity (worst-case): time O(n^3) | space O(n)
function mySolution1(array: number[], targetSum: number): Triplet[] {
  let result: Triplet[] = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      for (let k = j+1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) 
          result.push([array[i], array[j], array[k]])
      }
    }
  }
  result = result.map(triplet => triplet.sort((a, b) => a - b));
  result.sort((tripletA, tripletB) => {
    if (tripletA[0] !== tripletB[0]) return tripletA[0] - tripletB[0]
    if (tripletA[1] !== tripletB[1]) return tripletA[1] - tripletB[1]
    return tripletA[2] - tripletB[2]
  })
  return result;
}

// Two Pointers (left, rigth)
// [12, 3, 1, 2, -6, 5, -8, 6] 0 // sort
// [-8, -6, 1, 2, 3, 5, 6, 12] // curr=-8, l=-6, r=12
// -8 -6 12 => -2 // m l 
// -8 1 12  => 5 // m r
// -8 1 6   => -1 // m l
// -8 2 6   => 0 // push // m l r
// -8 3 5   => 0 // push // m l r // l > r, next number curr=-6
// -6 1 2   => -3 // m l
//...
// Complexity (worst-case): time O(n^2) | space O(n)
function solution1(array: number[], targetSum: number): Triplet[] {
  let result: Triplet[] = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let leftIdx = i + 1;
    let rightIdx = array.length - 1;
    while (leftIdx < rightIdx) {
      let currentSum = array[i] + array[leftIdx] + array[rightIdx];
      if (currentSum === targetSum) {
        result.push([array[i], array[leftIdx], array[rightIdx]]);
        leftIdx++;
        rightIdx--;
      }
      else if (currentSum < targetSum) leftIdx++;
      else rightIdx--;
    }
  }

  return result;
}

export default threeNumberSum;
