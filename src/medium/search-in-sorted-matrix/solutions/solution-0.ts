// Brute force approach
// Complexity (worst-case): O(n * m) time | O(1) space
// n = matrix rows && m = matrix cols
function searchInSortedMatrix(matrix: number[][], target: number): RangeMatrix {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === target) return [row, col];
    }
  }
  
  return [-1, -1];
}

export { searchInSortedMatrix as solution0 };
