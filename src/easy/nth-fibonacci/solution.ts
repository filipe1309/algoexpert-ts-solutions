// Test: make test-one t=nth-fibonacci
function nthFibonacci(n: number): number {
  return mySolution1(n);
}

// Complexity (worst-case): time O(2^n) | space O(n)
function mySolution1(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return mySolution1(n-1) + mySolution1(n-2);
}

export default nthFibonacci;
