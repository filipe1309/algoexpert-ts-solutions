// BFS + 2 Queues approach
// Complexity (worst-case): O(w * h) time | O(w * h) space
function minimumPassesOfMatrix(matrix: number[][]): number {
  const passes = convertNegatives(matrix);
  return !containsNegative(matrix) ? passes - 1 : -1;
}

function convertNegatives(matrix: number[][]): number {
  let nextPassQueue = getAllPositivesPositions(matrix);
  let passes = 0;
  while (nextPassQueue.length > 0) {
    const currPassQueue = nextPassQueue;
    nextPassQueue = [];

    while (currPassQueue.length > 0) {
      const [currentRow, currentCol] = currPassQueue.shift()!;
      const adjacentPositions = getAdjacentPositions(matrix, currentRow, currentCol);
      for (const [row, col] of adjacentPositions) {
        if (matrix[row][col] < 0) {
          matrix[row][col] *= -1;
          nextPassQueue.push([row, col]);
        }
      }
    }
    passes++;
  }

  return passes;
}

function getAllPositivesPositions(matrix: number[][]): number[][] {
  const positives = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) { positives.push([row, col]);}
    }
  }
  return positives;
}

function getAdjacentPositions(matrix: number[][], row: number, col: number) {
  const adjacentPositions = [];
  if (row > 0) adjacentPositions.push([row - 1, col]);
  if (row < matrix.length - 1) adjacentPositions.push([row + 1, col]);
  if (col > 0) adjacentPositions.push([row, col - 1]);
  if (col < matrix[row].length - 1) adjacentPositions.push([row, col + 1]);
  return adjacentPositions;
}

function containsNegative(matrix: number[][]): boolean {
  for (const row of matrix) {
    for (const value of row) {
      if (value < 0) return true;
    }
  }
  return false;
}

export { minimumPassesOfMatrix as solution1 };
