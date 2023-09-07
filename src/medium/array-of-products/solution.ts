// Test: make test t=array-of-products
function arrayOfProducts(array: number[]): number[] {
  // return mySolution1(array); // time O(n^2) | space O(n)
  return solution1(array); // time O(n^2) | space O(n)
}

// Brute force approach
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

// Brute force approach
// Complexity (worst-case): time O(n^2) | space O(n)
function solution1(array: number[]): number[] {
  let products: number[] = Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) runningProduct *= array[j];
    }
    products[i] =  runningProduct;
  }
  return products;
}

export default arrayOfProducts;
