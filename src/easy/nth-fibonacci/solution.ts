// Test: make test t=nth-fibonacci
function nthFibonacci(n: number): number {
  // return mySolution1(n); // time O(2^n) | space O(n)
  // return solution2(n); // time O(n) | space O(n)
  return solution3(n); // time O(n) | space O(1)
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

// Iterative
// Complexity (worst-case): time O(n) | space O(1)
function solution3(n: number): number { 
  const lastTwo = [0, 1];
  let counter = 3;

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}

export default nthFibonacci;
