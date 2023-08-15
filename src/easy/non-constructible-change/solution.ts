// https://www.algoexpert.io/questions/non-constructible-change

/*
  Non-Constructible Change

  Given an array of positive integers representing the values of coins in your possession,
  write a function that returns the minimum amount of change (the minimum sum of money)
  that you cannot create. The given coins can have any positive integer value and aren't
  necessarily unique (i.e., you can have multiple coins of the same value).

  For example, if you're given coins = [1, 2, 5], the minimum amount of change that you
  can't create is 4. If you're given no coins, the minimum amount of change that you can't
  create is 1.

  Sample Input
  coins = [5, 7, 1, 1, 2, 3, 22]

  Sample Output
  20
*/

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
