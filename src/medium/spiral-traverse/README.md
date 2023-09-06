# Spiral Traverse
> Source: https://www.algoexpert.io/questions/spiral-traverse  
> Difficulty: Medium  
> Category: Arrays
---

Write a function that takes in an n x m two-dimensional array (that can be 
square-shaped when n == m) and returns a one-dimensional array of all the 
array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes
to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

**Sample Input**
```javascript
array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]
```

**Sample Output**
```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16]
```

## Hints

<details>
<summary>Hint 1</summary>
You can think of the spiral that you have to traverse as a set of rectangle
perimeters that progressively get smaller (i.e., that progressively move 
inward in the two-dimensional array).
</details>

<details>
<summary>Hint 2</summary>
Going off of Hint #1, declare four variables: a starting row, a starting
column, an ending row, and an ending column. These four variables represent
the bounds of the first rectangle perimeter in the spiral that you have to
traverse. Traverse that perimeter using those bounds, and then move the bounds
inwards. End your algorithm once the starting row passes the ending row or the
starting column passes the ending column.
</details>

<details>
<summary>Hint 3</summary>
You can solve this problem iteratively or recursively following very similar
logic.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n) time | O(n) space - where n is the total number of elements in the array
</details>
