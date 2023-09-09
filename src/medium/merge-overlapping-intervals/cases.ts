export default [
  {
    input: [[ 1, 2 ], [ 3, 5 ], [ 4, 7 ], [ 6, 8 ], [ 9, 10 ]],
    expected: [[ 1, 2 ], [ 3, 8 ], [ 9, 10 ]]
  },
  {
    input: [[ 1, 3 ], [ 2, 8 ], [ 9, 10 ]],
    expected: [[ 1, 8 ], [ 9, 10 ]]
  },
  {
    input: [[ 1, 10 ], [ 10, 20 ], [ 20, 30 ], [ 30, 40 ], [ 40, 50 ], [ 50, 60 ], [ 60, 70 ], [ 70, 80 ], [ 80, 90 ], [ 90, 100 ]],
    expected: [[ 1, 100 ]]
  },
  {
    input: [[ 1, 10 ], [ 11, 20 ], [ 21, 30 ], [ 31, 40 ], [ 41, 50 ], [ 51, 60 ], [ 61, 70 ], [ 71, 80 ], [ 81, 90 ], [ 91, 100 ]],
    expected: [[ 1, 10 ], [ 11, 20 ], [ 21, 30 ], [ 31, 40 ], [ 41, 50 ], [ 51, 60 ], [ 61, 70 ], [ 71, 80 ], [ 81, 90 ], [ 91, 100 ]]
  },
  {
    input: [[ 100, 105 ], [ 1, 104 ]],
    expected: [[ 1, 105 ]]
  },
  {
    input: [[ 89, 90 ], [ -10, 20 ], [ -50, 0 ], [ 70, 90 ], [ 90, 91 ], [ 90, 95 ]],
    expected: [[ -50, 20 ], [ 70, 95 ]]
  },
  {
    input: [[ -5, -4 ], [ -4, -3 ], [ -3, -2 ], [ -2, -1 ], [ -1, 0 ]],
    expected: [[ -5, 0 ]]
  },
  {
    input: [[ 43, 49 ], [ 9, 12 ], [ 12, 54 ], [ 45, 90 ], [ 91, 93 ]],
    expected: [[ 9, 90 ], [ 91, 93 ]]
  },
  {
    input: [[ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ]],
    expected: [[ 0, 0 ]]
  },
  {
    input: [[ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 1 ]],
    expected: [[ 0, 1 ]]
  },
  {
    input: [[ 1, 22 ], [ -20, 30 ]],
    expected: [[ -20, 30 ]]
  },
  {
    input: [[ 20, 21 ], [ 22, 23 ], [ 0, 1 ], [ 3, 4 ], [ 23, 24 ], [ 25, 27 ], [ 5, 6 ], [ 7, 19 ]],
    expected: [[ 0, 1 ], [ 3, 4 ], [ 5, 6 ], [ 7, 19 ], [ 20, 21 ], [ 22, 24 ], [ 25, 27 ]]
  },
  {
    input: [[ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 1, 10 ]],
    expected: [[ 1, 10 ]]
  }
];