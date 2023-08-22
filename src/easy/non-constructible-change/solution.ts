// https://www.algoexpert.io/questions/non-constructible-change

function nonConstructibleChange(coins: number[]) {
  return solution(coins);
}

// time O(n*logn), space O(1)
function solution(coins: number[]): number {
  coins.sort((a, b) => a - b);

  let currMinChange = 0;
  for (let coin of coins) {
    if (coin > currMinChange + 1) return currMinChange + 1;
    currMinChange += coin;
  }

  return currMinChange + 1;
}

export default nonConstructibleChange;
