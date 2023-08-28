# Bubble Sort
> Source: https://www.algoexpert.io/questions/bubble-sort  
> Difficulty: easy  
> Category: Sorting
---

Write a function that takes in an array of integers and returns a sorted version 
of that array. Use the Bubble Sort algorithm to sort the array.

### Sample Input
```javascript
array = [8, 5, 2, 9, 5, 6, 3]
```

### Sample Output
```javascript
[2, 3, 5, 5, 6, 8, 9]
```

### Hints

<details>
<summary>Hint 1</summary>
Traverse the input array, swapping any two numbers that are out of order and
keeping track of any swaps that you make. Once you arrive at the end of the
array, check if you have made any swaps; if not, the array is sorted and you are
done; otherwise, repeat the steps laid out in this hint until the array is sorted.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
Best: O(n) time | O(1) space - where n is the length of the input array
<br>
Average: O(n^2) time | O(1) space - where n is the length of the input array
<br>
Worst: O(n^2) time | O(1) space - where n is the length of the input array
</details>
