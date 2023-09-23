# Merge Binary Trees
> Source: https://www.algoexpert.io/questions/merge-binary-trees  
> Difficulty: Medium  
> Category: Binary Trees
---

Given two binary trees, merge them and return the resulting tree. If two nodes
overlap during the merger then sum the values, otherwise use the existing node.

Note that your solution can either mutate the existing trees or return a new tree.

**Sample Input**
```ts
tree1 =  1
       /   \
      3     2
    /   \ 
   7     4
tree2 =  1
       /   \
      5     9
    /      /  \
   2      7    6
```

**Sample Output**
```ts
output =  2
        /   \
      8      11
    /   \   /  \
   9     4 7    6
```
