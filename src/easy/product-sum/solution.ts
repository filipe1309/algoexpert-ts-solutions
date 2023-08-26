type SpecialArray = Array<number | SpecialArray>;

// Test: make test-one t=product-sum
function productSum(array: SpecialArray) {
  return mySolution1(array); // time O(n) | space O(n)
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: SpecialArray, level: number = 1): number {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += mySolution1(array[i] as SpecialArray, level + 1);
    } else total += array[i] as number;
  }
  return total * level;
}

export default productSum;
export { SpecialArray }
