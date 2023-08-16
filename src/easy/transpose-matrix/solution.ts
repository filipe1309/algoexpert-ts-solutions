// https://www.algoexpert.io/questions/transpose-matrix

/*
  Transpose Matrix

  You're given a 2D array of integers matrix. Write a function that returns the 
  transpose of matrix.

  The transpose of a matrix is a flipped version of the original matrix across 
  its main diagonal (which runs from top left to bottom right); it switches the 
  row and column indices of the original matrix.

  Sample Input #1
  matrix = [
    [1, 2],
  ]

  Sample Output #1
  [
    [1],
    [2],
  ]

  Sample Input #2
  matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]

  Sample Output #2
  [
    [1, 3, 5],
    [2, 4, 6],
  ]

  Sample Input #3
  matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  Sample Output #3
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
*/

function transposeMatrix(matrix: number[][]) {
  return mySolution1(matrix);
}

// time O(n*m) | space O(n*m), where n=matrix.length, m=matrix[0].length
function mySolution1(matrix: number[][]) {
  let result = new Array(matrix[0].length)
    .fill([])
    .map(() => new Array(matrix.length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

export default transposeMatrix;

