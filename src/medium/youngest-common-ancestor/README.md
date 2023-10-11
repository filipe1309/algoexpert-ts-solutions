# Youngest Common Ancestor

| Source | https://www.algoexpert.io/questions/youngest-common-ancestor |
|---|---|
| Difficulty | Medium |
| Category | Graphs |

You're given three inputs, all of which are instances of an `AncestralTree` class 
that have an `ancestor` property pointing to their youngest ancestor. The first 
input is the top ancestor in an ancestral tree (i.e., the only instance that has 
no ancestor--its `ancestor` property points to `None` / `null`), and the other two 
inputs are descendants in the ancestral tree.

Write a function that returns the youngest common ancestor to the two descendants.

Note that a descendant is considered its own ancestor. So in the simple ancestral
tree below, the youngest common ancestor to nodes A and B is node A.
  
```ts
// The youngest common ancestor to nodes A and B is node A.
  A
 /
B
```

**Sample Input**
```ts
// The nodes are from the ancestral tree below.
topAncestor = node A
descendantOne = node E
descendantTwo = node I
          A
       /     \
      B       C
    /   \   /   \
   D     E F     G
 /   \
H     I
```

**Sample Output**
```ts
node B
```

## Hints

<details>
<summary>Hint 1</summary>
...
</details>

<details>
<summary>Hint 1</summary>
...
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
