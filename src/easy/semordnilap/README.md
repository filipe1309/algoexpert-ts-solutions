# Semordnilap
> Source: https://www.algoexpert.io/questions/semordnilap  
> Difficulty: Easy  
> Category: Strings
---

Write a function that takes in a list of unique strings and returns a list of 
semordnilaps pairs.

A semordnilap pair is defined as a set of different strings where the reverse
of one word is the same as the forward version of the other. For example the
words "diaper" and "repaid" are a semordnilap pair as are the words 
"palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair
does not matter.

**Sample Input**
```
words = ["diaper", "abc", "test", "cba", "repaid"]
```

**Sample Output**
```
[["diaper", "repaid"], ["abc", "cba"]]
```

## Hints

<details>
<summary>Hint 1</summary>
It can be helpful to convert the input array into a set, so that you can check 
if a word exists in the list in constant time.
</details>

<details>
<summary>Hint 2</summary>
After creating a set of words, try iterating through the orignal array. For each
word, can you check if its semordnilap pair exists in the word list?
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n * m) Time | O(n) Space - where n is the number of words and m is the length
of the longest word
</details>

