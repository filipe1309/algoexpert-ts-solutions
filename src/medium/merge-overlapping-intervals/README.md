# Merge Overlapping Intervals
> Source: https://www.algoexpert.io/questions/merge-overlapping-intervals  
> Difficulty: Medium  
> Category: Arrays
---

Write a function that takes in a non-empty array of arbitrary intervals, merges 
any overlapping intervals, and returns the new intervals in no particular order.

Each interval `interval` is an array of two integers, with `interval[0]` as the
start of the interval and `interval[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example,
`[1, 5]` and `[6, 7]` aren't overlapping; however, `[1, 6]` and `[6, 7]` are indeed
overlapping.

Also note that the start of any particular interval will always be less than or
equal to the end of that interval.

**Sample Input**
```javascript
intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
```

**Sample Output**
```javascript
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.
```

## Hints

<details>
<summary>Hint 1</summary>
The problem asks you to merge overlapping intervals. How can you determine if two
intervals are overlapping?
</details>

<details>
<summary>Hint 2</summary>
Sort the intervals with respect to their starting values. This will allow you to
merge all overlapping intervals in a single traversal through the sorted intervals.
</details>

<details>
<summary>Hint 3</summary>
After sorting the intervals with respect to their starting values, traverse them,
and at each iteration, compare the start of the next interval to the end of the
current interval to look for an overlap. If you find an overlap, mutate the current
interval so as to merge the next interval into it.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(nlog(n)) time | O(n) space - where n is the length of the input array
</details>
