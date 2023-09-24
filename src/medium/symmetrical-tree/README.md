# Symmetrical Tree
> Source: https://www.algoexpert.io/questions/symmetrical-tree  
> Difficulty: Medium  
> Category: Binary Trees
---

Write a function that takes in a Binary Tree and returns if that tree is 
symmetrical. A tree is symmetrical if the left and right subtrees are mirror
images of each other.

Each `BinaryTree` node has an integer `value`, a `left` child node, and a
`right` child node. Children nodes can either be `BinaryTree` nodes themselves
or `None` / `null`.

**Sample Input**
```ts
tree =   1
       /   \
      2     2
     / \   / \
    3   4 4   3
   / \       / \
  6   7     7   6
```

**Sample Output**
```ts
true
```

## Hints

<details>
<summary>Hint 1</summary>
It's important to first think about what it means for a binary tree to be
symmetrical. The left and right subtrees do not need to be the same, but
rather they need to be mirror images of each other (i.e. the same if one
is inverted).
</details>

<details>
<summary>Hint 2</summary>
It can be helpful to think about this problem one step at a time. Looking at
just the first node, how can you ensure its children are symmetrical? Then
looking at those children, how can you make sure they are symmetrical of each
other?
</details>

<details>
<summary>Hint 3</summary>
This problem can be solved either recursively or iteratively. Either way, try
traversing through the tree, uses a mirrored traversal on one side, and check
that the values of each node are the same.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n) time | O(h) space - where n is the number of nodes in the tree and
h is the height of the tree.
</details>

