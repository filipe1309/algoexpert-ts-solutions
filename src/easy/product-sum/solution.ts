type SpecialArray = Array<number | SpecialArray>;

// Test: make test t=product-sum
function productSum(array: SpecialArray) {
  return mySolution1(array); // time O(n) | space O(d), d=depth of the array
}

// Complexity (worst-case): time O(n) | space O(d), d=depth of the array
function mySolution1(array: SpecialArray, level: number = 1): number {
  let total = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      total += mySolution1(element as SpecialArray, level + 1);
    } else total += element as number;
  }
  return total * level;
}

export default productSum;
export { SpecialArray }
