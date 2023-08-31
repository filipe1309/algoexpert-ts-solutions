# Binary Search
> Source: https://www.algoexpert.io/questions/binary-search  
> Difficulty: easy  
> Category: Searching
---

Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise `-1`.

**Sample Input**
```
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33
```

**Sample Output**
```
3
```

## Hints

<details>
<summary>Hint 1</summary>
The Binary Search algorithm works by finding the number in the middle of the input array and comparing it to the target number. Given that the array is sorted, if this middle number is smaller than the target number, then the entire left part of the array is no longer worth exploring since the target number can no longer be in it; similarly, if the middle number is greater than the target number, then the entire right part of the array is no longer worth exploring. Applying this logic recursively eliminates half of the array until the number is found or until the array runs out of numbers.
</details>

<details>
<summary>Hint 2</summary>
Write a helper function that takes in two additional arguments: a left pointer and a right pointer representing the indices at the extremities of the array. These extremities will change throughout the algorithm, but initially, the left pointer will be at the start of the input array and the right pointer will be at the end. The first number to check will be the one at the middle of the array (i.e., at the average of the left and right pointers rounded down). Apply the Binary Search algorithm by comparing this number to the target number, and then adjusting the left and right pointers accordingly. Continue this process until the target number is found or until the left pointer becomes greater than the right pointer.
</details>

<details>
<summary>Hint 3</summary>
Can you implement the Binary Search algorithm iteratively? Are there any advantages to doing so?
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(log(n)) time | O(1) space - where n is the length of the input array
</details>
