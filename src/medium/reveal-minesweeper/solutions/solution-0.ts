const neighborsDirs = [
  // col, row
  [-1, -1], // up diagonal left
  [0, -1],  // up
  [1, -1],  // up diagonal right
  [-1, 1],  // down diagonal left
  [0, 1,],  // down
  [1, 1,],  // down diagonal right
  [-1, 0],  // left
  [1, 0],   // right
]

// Recursive + Directions Array approach
// Complexity (worst-case): O(w * h) time | O(w * h) space
// where w = width and h = height of the board
function revealMinesweeper(board: string[][], row: number, column: number) {
  // Update current pos
  if (board[row][column] === 'M') { board[row][column] = 'X'; return board; }
  const totalMinesAround = countMinesAround(board, row, column);
  board[row][column] = totalMinesAround.toString();

  // reveal neighbors if there is no mine around
  if (totalMinesAround === 0) {
    for (let [dirCol, dirRow] of neighborsDirs) {
      const neighborCol = column + dirCol;
      const neighborRow = row + dirRow;
      if (isInsideBoard(board, neighborRow, neighborCol) && board[neighborRow][neighborCol] === 'H') {
        revealMinesweeper(board, neighborRow, neighborCol);
      }
    }
  }
  return board;
}

function countMinesAround(board: string[][], row: number, column: number): number {
  let total = 0;
  for (let [dirCol, dirRow] of neighborsDirs) {
    const neighborCol = column + dirCol;
    const neighborRow = row + dirRow;
    if (isInsideBoard(board, neighborRow, neighborCol)) {
      total += board[neighborRow][neighborCol] === 'M' ? 1 : 0;
    }
  }

  return total;
}

function isInsideBoard(board: string[][], row: number, col: number) {
  return (col >= 0 && col < board[0].length) && (row >= 0 && row < board.length)
}

export { revealMinesweeper as solution0 };
