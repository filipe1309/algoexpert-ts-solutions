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
