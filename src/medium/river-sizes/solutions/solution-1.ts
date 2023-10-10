// Iterative DFS approach
// Complexity (worst-case): O(wh) time | O(wh) space
// where w is the width of the matrix and h is the height of the matrix
function riverSizes(matrix: number[][]): number[] {
  const sizes: number[] = [];
  const visited = matrix.map(row => row.map(_ => false));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (!visited[row][col]) traverseNode(row, col, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(row: number, col: number, matrix: number[][], visited: boolean[][], sizes: number[]): void {
  let currentRiverSize = 0;
  const nodesToExplore: number[][] = [[row, col]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    row = currentNode![0];
    col = currentNode![1];
    if (visited[row][col]) continue;
    visited[row][col] = true;
    if (matrix[row][col] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(row, col, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(row: number, col: number, matrix: number[][], visited: boolean[][]): number[][] {
  const unvisitedNeighbors: number[][] = [];
  if (row > 0 && !visited[row - 1][col]) unvisitedNeighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col]) unvisitedNeighbors.push([row + 1, col]);
  if (col > 0 && !visited[row][col - 1]) unvisitedNeighbors.push([row, col - 1]);
  if (col < matrix[0].length - 1 && !visited[row][col + 1]) unvisitedNeighbors.push([row, col + 1]);
  return unvisitedNeighbors;
}

export { riverSizes as solution1 };
