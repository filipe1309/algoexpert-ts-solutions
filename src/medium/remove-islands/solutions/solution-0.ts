// Keep Non Island approach
// Complexity (worst-case): O(n*m) time | O(n*m) space
// where n = matrix.length and m = matrix[0].length
function removeIslands(matrix: number[][]): number[][] {
  const result = matrix.map((row) => row.map((_) => 0));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] && isInBorder(row, col, matrix)) 
        copyNonIsland(matrix, result, row, col);
    }
  }
  return result;
}

function isInBorder (row: number, col: number, matrix: number[][]): boolean {
  return row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1;
}

function copyNonIsland(matrix: number[][], result: number[][], row: number, col: number) {
  if (matrix[row] == undefined || matrix[row][col] == undefined || matrix[row][col] <= 0) return;
  matrix[row][col] = -1;
  result[row][col] = 1;
  copyNonIsland(matrix, result, row + 1, col);
  copyNonIsland(matrix, result, row - 1, col);
  copyNonIsland(matrix, result, row, col + 1);
  copyNonIsland(matrix, result, row, col - 1);
}

export { removeIslands as solution0 };
