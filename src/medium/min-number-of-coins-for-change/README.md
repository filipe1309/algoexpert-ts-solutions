# Min Number Of Coins For Change
> Source: https://www.algoexpert.io/questions/min-number-of-coins-for-change  
> Difficulty: Medium  
> Category: Dynamic Programming
---

Given an array of positive integers representing coin denominations and a single 
non-negative integer `n` representing a target amount of money, write a function 
that returns the smallest number of coins needed to make change for (to sum up to) 
that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the
denominations are `[1, 5, 10]`, you have access to an unlimited amount of `1`s, 
`5`s, and `10`s.

If it's impossible to make change for the target amount, return `-1`.

**Sample Input**
```ts
n = 7
denoms = [1, 5, 10]
```

**Sample Output**
```ts
3 // 2x1 + 1x5
```

## Hints

<details>
<summary>Hint 1</summary>
Try building an array of the minimum number of coins needed to make change for all amounts between 0 and n inclusive. Note that no coins are needed to make change for 0: in order to make change for 0, you do not need to use any coins.
</details>

<details>
<summary>Hint 2</summary>
Build up the array mentioned in Hint #1 one coin denomination at a time. In other words, find the minimum number of coins needed to make change for all amounts between 0 and n with only one denomination, then with two, etc., until you use all denominations.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(nd) time | O(n) space - where n is the target amount and d is the number of coin denominations
</details>
