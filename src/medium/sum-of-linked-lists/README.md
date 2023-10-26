# Sum Of Linked Lists

| Source | https://www.algoexpert.io/questions/sum-of-linked-lists |
|---|---|
| Difficulty | Medium |
| Category | Linked Lists |

You're given two Linked Lists of potentially unequal length. Each Linked List
represents a non-negative integer, where each node in the Linked List is a
digit of that integer, and the first node in each Linked List always
represents the least significant digit of the integer. Write a function that
returns the head of a new Linked List that represents the sum of the integers
represented by the two input Linked Lists.

Each `LinkedList` node has an integer `value` as well as a `next` node
pointing to the next node in the list or to `None` / `null` if it's the tail
of the list. The value of each `LinkedList` node is always in the range of
`0 - 9`.

Note: your function must create and return a new Linked List, and you're not
allowed to modify either of the input Linked Lists.

**Sample Input**
```ts
linkedListOne = 2 -> 4 -> 7 -> 1 // 1742
linkedListTwo = 9 -> 4 -> 5 // 549
```

**Sample Output**
```ts
1 -> 9 -> 2 -> 2 // 2291
```

## Hints

<details>
<summary>Hint 1</summary>
If you can determine the integers that each individual Linked List represents,
then all you need to do is add these integers and create a new Linked List that
represents the summed value.
</details>

<details>
<summary>Hint 2</summary>
If you go with the approach mentioned in Hint #1, you'll need to break down the sum
of the two Linked Lists numbers into its individual digits. Once you know these digits,
you can create a new Linked List using them. This approach is fine, but you can solve
this problem mote elegantly, with a single iteration through the Linked Lists.
</details>

<details>
<summary>Hint 3</summary>
Is it necessary to know the entire numbers numbers represented by both Linked Lists
in order to calculate their sum? Think back to your elementary-school math class;
how did you add two numbers together?
</details>

<details>
<summary>Hint 4</summary>
Since each Linked List's digits are ordered from least significant digit to
most significant digit, you can simply loop through both Linked Lists,
consider the digits with the same significance, and add these digits together
while keeping track of any carry that comes out of the addition. At
each iteration, when you add the two Linked List digits, also add the carry
from the previous iteration. Create a new Linked List node that stores the
calculated value, and add that to your new Linked List. Keep iterating until
you reach the end of both Linked Lists and have no remaining carry.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(max(n, m)) time | O(max(n, m)) space - where n is the length of the first
Linked List and m is the length of the second Linked List
</details>
