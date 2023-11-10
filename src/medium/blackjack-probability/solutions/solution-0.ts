// Recursive approach
// Complexity (worst-case): O((t - s) ^ 2) time | O(t - s) space
function blackjackProbability(target: number, startingHand: number) {
  return parseFloat(bPHelper(target, startingHand).toFixed(3));
}

function bPHelper(target: number, currHand: number): number {
  if (currHand > target) return 1;
  if (currHand + 4 >= target) return 0;

  let totalProb = 0;
  for (let drawCard = 1; drawCard <= 10; drawCard++) {
    totalProb += 0.1 * bPHelper(target, currHand + drawCard);
  }

  return totalProb;
}

export { blackjackProbability as solution0 };
