export default [
  {
    input: { array: [2, 1, 2, 2, 2, 3, 4, 2], toMove: 2 },
    expected: [1, 3, 4, 2, 2, 2, 2, 2]
  },
  {
    input: { array: [], toMove: 3 },
    expected: []
  },
  {
    input: { array: [ 1, 2, 4, 5, 6 ], toMove: 3 },
    expected: [1, 2, 4, 5, 6]
  },
  {
    input: { array: [ 3, 3, 3, 3, 3 ], toMove: 3 },
    expected: [3, 3, 3, 3, 3]
  },
  {
    input: { array: [ 3, 1, 2, 4, 5 ], toMove: 3 },
    expected: [5, 1, 2, 4, 3]
  },
  {
    input: { array: [ 1, 2, 4, 5, 3 ], toMove: 3 },
    expected: [1, 2, 4, 5, 3]
  },
  {
    input: { array: [ 1, 2, 3, 4, 5 ], toMove: 3 },
    expected: [1, 2, 5, 4, 3]
  },
  {
    input: { array: [ 2, 4, 2, 5, 6, 2, 2 ], toMove: 2 },
    expected: [6, 4, 5, 2, 2, 2, 2]
  },
  {
    input: { array: [ 5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12 ], toMove: 5 },
    expected: [12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5]
  },
  {
    input: { array: [ 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5 ], toMove: 5 },
    expected: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
  },
  {
    input: { array: [ 5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12 ], toMove: 5 },
    expected: [12, 1, 2, 11, 10, 3, 4, 6, 7, 9, 8, 5, 5, 5, 5, 5, 5]
  }
];
