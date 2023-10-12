// Replace Border 1s with 2s approach
// Complexity (worst-case): O(w*h) time | O(w*h) space
// where w is the width of the matrix and h is the height of the matrix
function removeIslands(matrix: number[][]): number[][] {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1 && isInBorder(row, col, matrix)) 
        changeOnesConnectedToBorderToTwos(matrix, row, col);
    }
  }
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const color = matrix[row][col];
      if (color === 1) matrix[row][col] = 0;
      if (color === 2) matrix[row][col] = 1;
    }
  }

  return matrix;
}

function isInBorder (row: number, col: number, matrix: number[][]): boolean {
  return row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1;
}

function changeOnesConnectedToBorderToTwos(matrix: number[][], row: number, col: number) {
  const stack = [[row, col]];
  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop()!;
    matrix[currentRow][currentCol] = 2;
    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;
      if (matrix[row][col] !== 1) continue;
      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix: number[][], row: number, col: number): number[][] {
  const neighbors: number[][] = [];
  if (row > 0) neighbors.push([row - 1, col]);
  if (row < matrix.length - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);
  return neighbors;
}

export { removeIslands as solution2 };
