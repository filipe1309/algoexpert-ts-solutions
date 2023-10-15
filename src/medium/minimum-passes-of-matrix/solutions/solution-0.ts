const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]

// BF Set Of Changed approach
// Complexity (worst-case): O(w * h) time | O(w * h) space
function minimumPassesOfMatrix(matrix: number[][]): number {
  let changed: Set<string>;
  let hasNegativeYet;
  let count = 0;
  do {
    changed = new Set();
    hasNegativeYet = false;
    matrix.forEach((row, rowIdx) => {
      row.forEach((num, colIdx) => {
        if (num > 0 && !changed.has(`${rowIdx},${colIdx}`)) {
          for (let neighborDir of dir) {
            const [neighborCol, neighborRow] = neighborDir;
            if (isNeighborNegative(matrix, rowIdx + neighborRow, colIdx + neighborCol)) { 
              updateNeighbor(changed, matrix, rowIdx + neighborRow, colIdx + neighborCol);
            }
          }
        }
        if (num < 0) hasNegativeYet = true;
      })
    })
    if (changed.size) count++;
  } while (changed.size);

  return hasNegativeYet ? -1 : count;
}

function isNeighborNegative(matrix: number[][], rowIdx: number, colIdx: number): boolean {
  return matrix[rowIdx] !== undefined 
    && matrix[rowIdx][colIdx] !== undefined
    && matrix[rowIdx][colIdx] < 0
}

function updateNeighbor(changed: Set<string>, matrix: number[][], rowIdx: number, colIdx: number) {
  matrix[rowIdx][colIdx] *= -1; 
  changed.add(`${rowIdx},${colIdx}`);
}

export { minimumPassesOfMatrix as solution0 };
