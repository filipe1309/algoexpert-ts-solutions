// https://www.algoexpert.io/questions/transpose-matrix

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

