// ?? approach
// Complexity (worst-case): O(nd) time | O(n) space
function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
  if (!n) return 0;
  const ways = Array(n + 1).fill(-1);
  ways[0] = 0;
  denoms.sort((a, b) => a - b);
  for (let denom of denoms) {
    for (let wayIdx = 1; wayIdx < ways.length; wayIdx++) {
      if (wayIdx >= denom) {
          if (isDiffAvailable(ways, wayIdx, denom) && isNewAmountLessThanCurrent(ways, wayIdx, denom))
          ways[wayIdx] = 1 + ways[wayIdx - denom];
      }
    }
  }
  return ways[n] > 0? ways[n] : -1;
}

function isDiffAvailable(ways: number[], wayIdx: number, denom: number): boolean {
  return (ways[wayIdx - denom] > 0) || (wayIdx - denom === 0);
}

function isNewAmountLessThanCurrent(ways: number[], wayIdx: number, denom: number): boolean {
  return (1 + ways[wayIdx - denom]) < ways[wayIdx] || ways[wayIdx] <= 0
}

export { minNumberOfCoinsForChange as solution0 };

