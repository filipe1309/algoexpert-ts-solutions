export default [
  {
    input: [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0]
    ],
    expected: [2, 1, 5, 2, 2]
  },
  {
    input: [
      [0]
    ],
    expected: []
  },
  {
    input: [
      [1]
    ],
    expected: [1]
  },
  {
    input: [
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]
    ],
    expected: [3, 2, 1]
  },
  {
    input: [
      [1, 0, 0, 1],
      [1, 0, 1, 0],
      [0, 0, 1, 0],
      [1, 0, 1, 0]
    ],
    expected: [2, 1, 3, 1]
  },
  {
    input: [
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]
    ],
    expected: [2, 1, 21, 5, 2, 1]
  },
  {
    input: [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1]
    ],
    expected: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    input: [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1]
    ],
    expected: [1, 1, 1, 1, 7, 1, 1, 1, 1]
  },
  {
    input: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    expected: []
  },
  {
    input: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1]
    ],
    expected: [49]
  },
  {
    input: [
      [1, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 0, 0, 0, 1, 1]
    ],
    expected: [3, 5, 6]
  },
  {
    input: [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1]
    ],
    expected: [10, 1, 1, 2, 6]
  }
];
