// Test: make test t=spiral-traverse
function spiralTraverse(array: number[][]): number[] {
  return mySolution1(array); // time O(n) | space O(n)
}

// Iterative solution
// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[][]): number[] {
  let result: number[] = []
  let startCol = 0;
  let startRow = 0;
  let endCol = array[0].length - 1;
  let endRow = array.length - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    endCol--;
    
    if (startRow > endRow || startCol > endCol) break;

    for (let col = endCol; col >= startCol; col--) {
      result.push(array[endRow][col]);
    }
    endRow--;
    
    for (let row = endRow; row >= startRow; row--) {
      result.push(array[row][startCol]);
    }
    startCol++;
  }

  return result;
}

export default spiralTraverse;
