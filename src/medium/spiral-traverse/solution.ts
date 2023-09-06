// Test: make test t=spiral-traverse
function spiralTraverse(array: number[][]): number[] {
  return mySolution1(array); // time O() | space O()
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(array: number[][]): number[] {
  let result: number[] = []
  let x = 0;
  let y = 1;
  let leftCol = 0;
  let rightCol = array[0].length - 1;
  let topRow = 0;
  let bottomRow = array.length - 1;
  let matrixSize = array.length * array[0].length
  while (result.length !== matrixSize) {
    while (x <= rightCol) {
      result.push(array[topRow][x++]);
      if (result.length === matrixSize) return result;
    }
    x--;
    topRow++;

    while (y <= bottomRow) {
      result.push(array[y++][rightCol]);
      if (result.length === matrixSize) return result;
    }
    y--;
    rightCol--;

    while (x > leftCol) {
      result.push(array[bottomRow][--x]);
      if (result.length === matrixSize) return result;
    }
    x++;
    bottomRow--;

    while (y > topRow) {
      result.push(array[--y][leftCol]);
      if (result.length === matrixSize) return result;
    }
    leftCol++;
    y++;
  }

  return result;
}

export default spiralTraverse;
