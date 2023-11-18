// Binary Search By Column approach
// Complexity (worst-case): O(h * log(w)) time | O(1) space
// h = matrix height && w = matrix width
function searchInSortedMatrix(matrix: number[][], target: number): RangeMatrix {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] > target) break;
    let col = binarySearch(matrix[row], target);
    if (col !== -1 && matrix[row][col] === target) return [row, col];
  }

  return [-1, -1];
}

function binarySearch(list: number[], target: number): number {
  let begin = 0;
  let end = list.length - 1;

  while (end >= begin) {
    let middle = Math.floor((begin + end) / 2);
    if (list[middle] === target) return middle;
    if (list[middle] > target) end = middle - 1; else begin = middle + 1;
  }

  return -1;
}

export { searchInSortedMatrix as solution1 };
