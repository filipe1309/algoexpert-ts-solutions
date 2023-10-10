// Count Recursive For 1's approach
// For each 1 in the matrix, call a recursive alg that will count
// how many 1's are connected, and will replace 1 and 0 with -1 in order to
// avoid double counting
// Complexity (worst-case): O(wh) time | O(wh) space
// where w is the width of the matrix and h is the height of the matrix
function riverSizes(matrix: number[][]): number[] {
  const results = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) results.push(walk(matrix, row, col));
    }
  }
  return results;
}

function walk(matrix: number[][], row: number, col: number): number {
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) return 0;
  if (matrix[row][col] === 0 || matrix[row][col] === -1) return 0;
  matrix[row][col] = -1;
  return 1 
  + walk(matrix, row + 1, col) // verify down
  + walk(matrix, row, col + 1) // verify right
  + walk(matrix, row, col - 1) // verify left
  + walk(matrix, row - 1, col) // verify up
}

export { riverSizes as solution0 };
