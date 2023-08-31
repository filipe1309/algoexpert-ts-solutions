# Selection Sort
> Source: https://www.algoexpert.io/questions/selection-sort  
> Difficulty: easy  
> Category: Sorting
---

Write a function that takes in an array of integers and returns a sorted version
of that array. Use the Selection Sort algorithm to sort the array.

#**Sample Input**
```javascript
array = [8, 5, 2, 9, 5, 6, 3]
```

#**Sample Output**
```javascript
[2, 3, 5, 5, 6, 8, 9]
```

### Hints

<details>
  <summary>Hint 1</summary>
  Divide the input array into two subarrays in place. The first subarray should
  be sorted at all times and should start with a length of 0, while the second
  subarray should be unsorted. Find the smallest (or largest) element in the
  unsorted subarray and insert it into the sorted subarray with a swap. Repeat
  this process of finding the smallest (or largest) element in the unsorted
  subarray and inserting it in its correct position in the sorted subarray with
  a swap until the entire array is sorted.
</details>

<details>
  <summary>Optimal Space &amp; Time Complexity</summary>
  Best: O(n^2) time | O(1) space - where n is the length of the input array
  <br>
  Average: O(n^2) time | O(1) space - where n is the length of the input array
  <br>
  Worst: O(n^2) time | O(1) space - where n is the length of the input array
</details>
