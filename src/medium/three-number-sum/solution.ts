type Triplet = [number, number, number];

// Test: make test t=three-number-sum
function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  return mySolution1(array, targetSum); // time O(n^3) | space O(n)
}

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

export default threeNumberSum;
