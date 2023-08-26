// Test: make test-one t=nth-fibonacci
function nthFibonacci(n: number): number {
  // return mySolution1(n); // Complexity (worst-case): time O(2^n) | space O(n)
  return solution2(n); // Complexity (worst-case): time O(n) | space O(n)
}

// Complexity (worst-case): time O(2^n) | space O(n)
function mySolution1(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return mySolution1(n - 1) + mySolution1(n - 2);
}

// Caching/Memoization
// Complexity (worst-case): time O(n) | space O(n)
function solution2(n: number, memoize: {[key: number]: number} = {1: 0, 2: 1}): number { 
  if (memoize[n]) return memoize[n];
  if (n === 1) return 0;
  if (n === 2) return 1;

  memoize[n] = solution2(n - 1, memoize) + solution2(n - 2, memoize);
  return memoize[n];
}


export default nthFibonacci;
