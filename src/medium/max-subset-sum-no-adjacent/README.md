# Max Subset Sum No Adjacent
> Source: https://www.algoexpert.io/questions/max-subset-sum-no-adjacent  
> Difficulty: Medium  
> Category: Dynamic Programming
---

Write a function that takes in an array of positive integers and returns the 
maximum sum of non-adjacent elements in the array.

If the input array is empty, the function should return `0`.

**Sample Input**
```ts
array = [75, 105, 120, 75, 90, 135]
```

**Sample Output**
```ts
330 // 75 + 120 + 135
```

## Hints

<details>
<summary>Hint 1</summary>
Try building an array of the same length as the input array. At each index in this new array, store the maximum sum that can be generated using no adjacent numbers located between index 0 and the current index.
</details>

<details>
<summary>Hint 2</summary>
Can you come up with a formula that relates the max sum at index i to the max 
sums at indices i - 1 and i - 2?
</details>

<details>
<summary>Hint 3</summary>
Do you really need to store the entire array mentioned in Hint #1, or can you 
somehow store just the max sums that you need at any point in time?
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n) time | O(1) space - where n is the length of the input array
</details>
