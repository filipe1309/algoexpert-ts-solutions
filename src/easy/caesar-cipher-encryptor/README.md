# Caesar Cipher Encryptor
> Source: https://www.algoexpert.io/questions/caesar-cipher-encryptor  
> Difficulty: Easy  
> Category: Strings
---

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter `z` shifted by one returns the letter `a`.

## Sample Input:
```javascript
string = "xyz"
key = 2
```

## Sample Output:
```javascript
"zab"
```

## Hints

<details>
  <summary>Hint 1</summary>
  Most languages have built-in functions that give you the Unicode value of a character as well as the character corresponding to a Unicode value. Consider using such functions to determine which letters the input string's letters should be mapped to.
</details>

<details>
  <summary>Hint 2</summary>
  Try creating your own mapping of letters to codes. In other words, try associating each letter in the alphabet with a specific number - its position in the alphabet, for instance - and using that to determine which letters the input string's letters should be mapped to.
</details>

<details>
  <summary>Hint 3</summary>
  How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? What about cases where the key is very large and causes multiple wrappings around the alphabet? The modulo operator should be your friend here.
</details>

<details>
  <summary>Optimal Space &amp; Time Complexity</summary>
  O(n) time | O(n) space - where n is the length of the input string
</details>
