// Array of Ways approach
// Complexity (worst-case): time O(n*d) | space O(n)
// ways[amount] = ways[amount] + ways[amount - denom]
function numberOfWaysToMakeChange(n: number, denoms: number[]): number {
  const ways = Array(n+1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount <= n+1; amount++) {
      if (denom <= amount) ways[amount] += ways[amount - denom];
    }
  }
  return ways[n];
}

export { numberOfWaysToMakeChange as solution1 };
