// Array of Coins approach
// Complexity (worst-case): O(nd) time | O(n) space
function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
  const numOfCoins = Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (let denom of denoms) {
    for (let amount = 1; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
          numOfCoins[amount] = Math.min(
            numOfCoins[amount], 1 + numOfCoins[amount - denom]
          );
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

export { minNumberOfCoinsForChange as solution0 };

