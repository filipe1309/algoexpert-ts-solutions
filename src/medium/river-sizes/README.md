# River Sizes

| Source | https://www.algoexpert.io/questions/river-sizes |
|---|---|
| Difficulty | Medium |
| Category | Graphs |

You're given a two-dimensional array (a matrix) of potentially unequal height and 
width containing only `0`s and `1`s. Each `0` represents land, and each `1` represents 
part of a river. A river consists of any number of `1`s that are either horizontally 
or vertically adjacent (but not diagonally adjacent). The number of adjacent `1`s 
forming a river determine its size.

Note that a river can twist. In other words, it doesn't have to be a straight vertical
line or a straight horizontal line; it can be L-shaped, for example.

Write a function that returns an array of the sizes of all rivers represented in the
input matrix. The sizes don't need to be in any particular order.

**Sample Input**
```ts
matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]
```

**Sample Output**
```ts
[1, 2, 2, 2, 5] // The numbers could be ordered differently.

// The rivers can be clearly seen here:
// [
//   [1,  ,  , 1,  ],
//   [1,  , 1,  ,  ],
//   [ ,  , 1,  , 1],
//   [1,  , 1,  , 1],
//   [1,  , 1, 1,  ],
// ]
```

## Hints

<details>
<summary>Hint 1</summary>
...
</details>

<details>
<summary>Hint 2</summary>
...
</details>

<details>
<summary>Hint 3</summary>
...
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
