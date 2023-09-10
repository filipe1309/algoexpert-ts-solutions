# Zero Sum Subarray
> Source: https://www.algoexpert.io/questions/zero-sum-subarray  
> Difficulty: Medium  
> Category: Arrays
---

You're given an array of integers `nums`. Write a function that returns a 
boolean representing whether there exists a zero-sum subarray of `nums`.

A zero-sum subarray is any subarray where all of the values add up to zero. A
subarray is any contiguous section of the array. For the porposes of this
problem, a subarray can be as small as one element and as long as the original
array.

**Sample Input**
```javascript
nums = [-5, -5, 2, 3, -2]
```

**Sample Output**
```javascript
true // The subarray [-5, 2, 3] has a sum of 0
```

## Hints

<details>
<summary>Hint 1</summary>
A good way to approach this problem is to first think of a simpler version. How
would you check if the entire array sum is zero?
</details>

<details>
<summary>Hint 2</summary>
If the entire array does not sum to zero, the you need to check if there are any
smaller subarray that sum to zero. For this, it can be helpful to keep track of 
all of the sums from [0, i], where i is every index in the array.
</details>

<details>
<summary>Hint 3</summary>
After recording all of the sums from [0, i], what would it mean if a sum is
repeated?
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(n) time | O(n) space - where n is the length of the input array
</details>

