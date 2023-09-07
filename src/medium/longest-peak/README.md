# Longest Peak
> Source: https://www.algoexpert.io/questions/longest-peak  
> Difficulty: Medium  
> Category: Arrays
---

Write a function that takes in an array of integers and returns the length of 
the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing 
until they reach a tip (the highest value in the peak), at which point they
become strictly decreasing. At least three integers are required to form a peak.

For example, the integers `1, 4, 10, 2` form a peak, but the integers 
`4, 0, 10` don't and neither do the integers `1, 2, 2, 0`. Similarly, the
integers `1, 2, 3` don't form a peak because there aren't any strictly 
decreasing integers after the `3`.

**Sample Input**
```javascript
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
```

**Sample Output**
```javascript
6 // 0, 10, 6, 5, -1, -3
```

## Hints

<details>
<summary>Hint 1</summary>
You can solve this question by iterating through the array from left to right
once.
</details>

<details>
<summary>Hint 2</summary>
Iterate through the array from left to right, and treat every integer as the
potential tip of a peak. To be the tip of a peak, an integer has to be strictly
greater than its adjacent integers.
</details>

<details>
<summary>Hint 3</summary>
As you iterate through the array from left to right, whenever you find a tip of
a peak, expand outwards from the tip until you no longer have a peak. Given what
peaks look like and how many peaks can therefore fit in an array, realize that
this process results in a linear-time algorithm. Make sure to keep track of the
longest peak you find as you iterate through the array.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n) time | O(1) space - where n is the length of the input array
</details>

