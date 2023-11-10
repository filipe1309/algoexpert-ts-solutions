// Recursive + Memoization approach
// Complexity (worst-case): O(t - s) time | O(t - s) space
function blackjackProbability(target: number, startingHand: number) {
  const memo: {[hand: number]: number} = {};
  return parseFloat(bPHelper(target, startingHand, memo).toFixed(3));
}

function bPHelper(target: number, currHand: number, memo: {[hand: number]: number}): number {
  if (currHand in memo) return memo[currHand];
  if (currHand > target) return 1;
  if (currHand + 4 >= target) return 0;

  let totalProb = 0;
  for (let drawCard = 1; drawCard <= 10; drawCard++) {
    totalProb += 0.1 * bPHelper(target, currHand + drawCard, memo);
  }

  memo[currHand] = totalProb;
  return totalProb;
}

export { blackjackProbability as solution1 };
