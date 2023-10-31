# Powerset

| Source | https://www.algoexpert.io/questions/powerset |
|---|---|
| Difficulty | Medium |
| Category | Recursion |

Write a function that takes in an array of unique integers and returns its powerset.

The powerset `P(X)` of a set `X` is the set of all subsets of `X`. For example, the
powerset of `[1, 2]` is `[[], [1], [2], [1, 2]]`.

Note that the sets in the powerseet do not need to be in any particular order.

**Sample Input**
```ts
array = [1, 2, 3]
```

**Sample Output**
```ts
[
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3]
]
```

## Hints

<details>
<summary>Hint 1</summary>
Think about the base cases. What is the powerset of an empty set? What is the
powerset of a set of length 1?
</details>

<details>
<summary>Hint2</summary>
If you were to take the input set X and add an element to it, how would the resulting
powerset change?
</details>

<details>
<summary>Hint 3</summary>
Can you solve this problem recursively? Can you solve it iteratively? What are the
advantages and disadvantages of using either approach?
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n*2^n) time | O(n*2^n) space - where n is the length of the input array
</details>
