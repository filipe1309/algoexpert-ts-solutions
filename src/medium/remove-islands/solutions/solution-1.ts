// DFS on Border with Bool Aux Matrix approach
// Complexity (worst-case): O(w*h) time | O(w*h) space
// where w is the width of the matrix and h is the height of the matrix
function removeIslands(matrix: number[][]): number[][] {
  const onesConnectedToBorder = matrix.map((row) => row.map((_) => false));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1 && isInBorder(row, col, matrix)) 
        findOnesConnectedToBorder(matrix, onesConnectedToBorder, row, col);
    }
  }
  
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[0].length - 1; col++) {
      if (matrix[row][col] === 1 && !onesConnectedToBorder[row][col]) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

function isInBorder (row: number, col: number, matrix: number[][]): boolean {
  return row === 0 || col === 0 || row === matrix.length - 1 || col === matrix[0].length - 1;
}

function findOnesConnectedToBorder(matrix: number[][], onesConnectedToBorder: boolean[][], row: number, col: number) {
  const stack = [[row, col]];
  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop()!;
    const alreadyVisited = onesConnectedToBorder[currentRow][currentCol];
    if (alreadyVisited) continue;
    onesConnectedToBorder[currentRow][currentCol] = true;
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


export { removeIslands as solution1 };
