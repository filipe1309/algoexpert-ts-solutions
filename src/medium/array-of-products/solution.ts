// Test: make test t=array-of-products
function arrayOfProducts(array: number[]): number[] {
  return mySolution1(array); // time O(n^2) | space O(n)
}

// Complexity (worst-case): time O(n^2) | space O(n)
function mySolution1(array: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const tmp = array[i];
    array[i] = 1;
    result.push(array.reduce((prev, curr) => prev*curr));
    array[i] = tmp;
  }
  return result;
}

export default arrayOfProducts;
