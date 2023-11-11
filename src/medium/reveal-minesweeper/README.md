# Reveal Minesweeper

| Source | https://www.algoexpert.io/questions/reveal-minesweeper |
|---|---|
| Difficulty | Medium |
| Category | <details><summary>Click to view 👁️</summary>Recursion</details> |

[Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))
is a popular video game. From Wikipedia, "The game features a grid of
clickable squares, with hidden "mines" scattered throughout the board. The
objective is to clear the board without detonating any mines, with help from
clues about the number of neighboring mines in each field." Specifically,
when a player clicks on a square (also called a cell) that doesn't contain a
mine, the square reveals a number representing the number of immediately
adjacent mines (including diagonally adjacent mines).

You're given a two-dimensional array of strings that represents a
Minesweeper board for a game in progress. You're also given a row and a
column representing the indices of the next square that the player clicks on
the board. Write a function that returns an updated board after the click
(your function can mutate the input board).

The board will always contain only strings, and each string will be one of
the following:

- `"M"`: A mine that has not been clicked on.
- `"X"`: A mine that has been clicked on., indicating a lost game.
- `"H"`: A cell with no mine, but whose content is still hidden to the player.
- `"0-8"`: A cell with no mine, with an integer from 0 to 8
representing the number of adjacent mines. Note that this is a
single-digit integer represented as a string. For example
`"2"` would mean there are 2 adjacent cells with mines.
Numbered cells are not clickable as they have already been revealed.

If the player clicks on a mine, replace the `"M"` with
`"X"`, indicating the game was lost.

If the player clicks on a cell adjacent to a mine, replace the
`"H"` with a string representing the number of adjacent mines.

If the player clicks on a cell with no adjacent mines, replace the
`"H"` with `"0"`. Additionally, reveal all of the
adjacent hidden cells as if the player had clicked on those cells as well.

You can assume the given row and column will always represent a legal move.
The board can be of any size and have any number of mines in it.

**Sample Input #1**
```ts
board = [
  ["M", "M"],
  ["H", "H"],
  ["H", "H"]
]   
row = 2
column = 0
```

**Sample Output #1**
```ts
[
  ["M", "M"],
  ["2", "2"],
  ["0", "0"]
]
```

**Sample Input #2**
```ts
board = [
  ["H", "H", "H", "H", "M"],
  ["H", "1", "M", "H", "1"],
  ["H", "H", "H", "H", "H"],
  ["H", "H", "H", "H", "H"]
]   
row = 3
column = 4

```

**Sample Output #2**
```ts
[
  ["0", "1", "H", "H", "M"],
  ["0", "1", "M", "2", "1"],
  ["0", "1", "1", "1", "0"],
  ["0", "0", "0", "0", "0"]
]
```

## Hints

<details>
<summary>Hint 1</summary>
...
</details>

<details>
<summary>Hint 2</summary>
...
</details>

<details>
<summary>Hint 3</summary>
...
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
