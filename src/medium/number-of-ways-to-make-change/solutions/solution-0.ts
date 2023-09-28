// Map + Array of Multiplication approach
// Complexity (worst-case): time O(n^2) | space O(n)
function numberOfWaysToMakeChange(n: number, denoms: number[]): number {
  const mults = Array(denoms.length).fill(0);
  const result = new Map<string, boolean>()
  return calculateCombinations(n, denoms, mults, result).size;
}

function calculateCombinations(
  n: number, 
  denoms: number[], 
  mults: number[], 
  result: Map<string, boolean>
): Map<string, boolean> {
  const total = mults.map((v, i) => v * denoms[i]).reduce((p, c) => p + c);
  if (total > n) return result;
  if (total === n) { result.set(mults.toString(), true); return result; }
  for (let i = 0; i < denoms.length; i++) {
    const newMults = [...mults];
    newMults[i] += 1;
    calculateCombinations(n, denoms, newMults, result);
  }

  return result;
}

export { numberOfWaysToMakeChange as solution0 };
