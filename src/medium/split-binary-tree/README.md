# Split Binary Tree
> Source: https://www.algoexpert.io/questions/split-binary-tree  
> Difficulty: Medium  
> Category: Binary Trees
---

Write a function that takes in a Binary Tree with at least one node and
checks if that Binary Tree can be split into two Binary Trees of equal sum by
removing a single edge. If this split is possible, return the new sum of each
Binary Tree, otherwise return 0. Note that you do not need to return the edge
that was removed.

The sum of a Binary Tree is the sum of all values in that Binary Tree.

Each `BinaryTree` node has an integer `value`, a `left` child node, and a
`right` child node. Children nodes can either be `BinaryTree` nodes themselves
or `None` / `null`.

**Sample Input**
```ts
tree =     1
        /     \
       3      -2
     /   \    /  \
    6    -5  5    2
   /
  2
```

**Sample Output**
```ts
6 // Remove the edge to the left of the root node,
  // creating two trees, each with sums of 6
```

## Hints

<details>
<summary>Hint 1</summary>
Try first calculating the sum of the entire Binary Tree. What information does
this give you towards solving the problem?
</details>

<details>
<summary>Hint 2</summary>
If the sum of the entire Binary Tree is odd, then there is no possible
solution, because the values are all integers. Otherwise, the solution could
be that sum divided by two, or potentially there is still no solution. What
does the scenario look like where the solution is the sum divided by two?
</details>

<details>
<summary>Hint 3</summary>
There is a solution if there is a subtree that has a sum equal to the the
total Binary Tree sum divided by two. In this case, removing the incoming
edge to that node would have to create another Binary Tree of equal sum.  
</details>

<details>
<summary>Hint 4</summary>
To prevent recalculating the same subtree sums, try using a post-order
traversal of the Binary Tree. This allows you to calculate the sums of the
smallest subtrees first, then send that information back up to the parents to
quickly calculate their sums.
There is a solution if there is a subtree that has a sum equal to the the
total Binary Tree sum divided by two. In this case, removing the incoming
edge to that node would have to create another Binary Tree of equal sum.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
