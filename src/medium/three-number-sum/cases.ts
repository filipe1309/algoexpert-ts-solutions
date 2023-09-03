export default [
  {
    input: {
      array: [ 12, 3, 1, 2, -6, 5, -8, 6 ],
      targetSum: 0
    },
    expected: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
  },
  {
    input: { array: [ 1, 2, 3 ], targetSum: 6 },
    expected: [[ 1, 2, 3 ]]
  },
  {
    input: { array: [ 1, 2, 3 ], targetSum: 7 },
    expected: []
  },
  {
    input: { array: [ 8, 10, -2, 49, 14 ], targetSum: 57 },
    expected: [[ -2, 10, 49 ]]
  },
  {
    input: { array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1 ], targetSum: 0 },
    expected: [[ -8, 3, 5 ], [ -6, 1, 5 ], [ -1, 0, 1 ]]
  },
  {
    input: {
    array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1, 6 ], targetSum: 0 },
    expected: [[ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 0, 6 ], [ -6, 1, 5 ], [ -1, 0, 1 ]]
  },
  {
    input: { array: [ 12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], targetSum: 0 },
    expected: [ [-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-5, -1, 6], [-5, 0, 5], [-5, 2, 3], [-1, 0, 1]]
  },
  {
    input: { array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 18 },
    expected: [ [1, 2, 15],[1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]]
  },
  {
    input: { array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 32 },
    expected: [[8, 9, 15]]
  },
  {
    input: { array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 33 },
    expected: []
  },
  {
    input: { array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], targetSum: 5 },
    expected: []
  }
];
