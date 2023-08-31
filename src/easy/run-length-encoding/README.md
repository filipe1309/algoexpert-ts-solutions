# Run-Length Encoding
> Source: https://www.algoexpert.io/questions/run-length-encoding  
> Difficulty: Easy  
> Category: Strings
---

Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run `"AAA"` would be run-length-encoded as `"3A"`.

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run `"AAAAAAAAAAAA"` (12 `A`s), can't naively be encoded as `"12A"`, since this string can be decoded as either `"AAAAAAAAAAAA"` or `"1AA"`. Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as `"9A3A"`.

**Sample Input**
```
string = "AAAAAAAAAAAAABBCCCCDD"
```

**Sample Output**
```
"9A4A2B4C2D"
```

## Hints

<details>
<summary>Hint 1</summary>
Traverse the input string and count the length of each run. As you traverse the 
string, what should you do when you reach a run of length 9 or the end of a run?
</details>

<details>
<summary>Hint 2</summary>
When you reach a run of length 9 or the end of a run, store the computed count
for the run as well as its characters (you'll likely need a list for these
computed counts and characters), and reset the count to 1 before continuing to
traverse the string.
</details>

<details>
<summary>Hint 3</summary>
Make sure that your solution handles the last run in the string.
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(n) time | O(n) space - where n is the length of the input string
</details>
