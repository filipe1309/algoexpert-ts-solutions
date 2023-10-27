# Merging Linked Lists

| Source | https://www.algoexpert.io/questions/merging-linked-lists |
|---|---|
| Difficulty | Medium |
| Category | Linked Lists |

You're given two Linked List of potentially unequal length. These Linked Lists potentially
merge at a shared intersection node. Write a function that returns the intersection
node or return `None` / `null` if there is no intersection.

Each `Linked List` node has an integer `value` as well as a `next` node pointing to the
next node in the list or to `None` / `null` if it's the tail of the list.

Note: Your function should return an existing node. It should not modify either
Linked List, and it should not create any new Linked Lists.

**Sample Input**
```ts
linkedListOne = 2 -> 3 -> 1 -> 4
linkedListTwo = 8 -> 7 -> 1 -> 4
```

**Sample Output**
```ts
1 -> 4 // The lists intersect at the node with value 1
```

## Hints

<details>
<summary>Hint 1</summary>
All of the nodes after the intersection point of two Linked Lists will be the same.
</details>

<details>
<summary>Hint 2</summary>
If the two Linked Lists are of different lengths, then none of the extra nodes of
the longer list at the beginning can be the intersection point, since the ends must
be the same.
</details>

<details>
<summary>Hint 3</summary>
The length of the first list + the distance of the second head from the intersection
point will be equal to the length of the second list + the distance of the first head
from the intersection point. This can be prove using the information from hints 1 and 2.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
