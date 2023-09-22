# Height Balanced Binary Tree
> Source: https://www.algoexpert.io/questions/height-balanced-binary-tree  
> Difficulty: Medium  
> Category: Binary Trees
---

You're given the root node of a Binary Tree. Write a function that returns `true` 
if this Binary Tree is height balanced and `false` if it isn't.

A Binary Tree is height balanced if for each node in the tree, the difference
between the height of its left subtree and the height of its right subtree is
at most `1`.

Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right`
child node. Children nodes can either be `BinaryTree` nodes themselves or `None` /
`null`.

**Sample Input**
```ts
tree = 1
     /   \
    2     3
  /   \     \
 4     5     6
       \
        7
```

**Sample Output**
```ts
true
```

## Hints

<details>
<summary>Hint 1</summary>
To solve this problem, you'll have to determine if <b>every</b> subtree in the
Binary Tree is balanced. Which subtrees do you know will always be balanced?
</details>

<details>
<summary>Hint 2</summary>
To determine if a subtree is balanced, you need to know the height of its left
and right subtrees. The only exception to this is if a subtree has no left and
right subtrees (i.e., it's just a leaf node); in that case, the subtree must
be balanced.
</details>

<details>
<summary>Hint 3</summary>
Recursively calculate the left and right subtree heights from each node. Once
you know the heights of a particular node's left and right subtrees, you can
determine if the subtree rooted at that node is balanced. If a subtree ever
isn't balanced, you can immediately conclude that the entire tree isn't
balanced. If you make it through the entire tree without finding any
unbalanced subtrees, and if you determine that the heights of the main two
subtrees aren't more than `1` apart, then the entire tree is
balanced.
</details>
