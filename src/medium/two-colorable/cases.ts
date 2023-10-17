export default [
  {
    input: [
      [1],
      [0]
    ],
    expected: true
  },
  {
    input: [
      [0]
    ],
    expected: false
  },
  {
    input: [
      [1, 2],
      [0, 2],
      [0, 1]
    ],
    expected: false
  },
  {
    input: [
      [1],
      [0, 2],
      [1]
    ],
    expected: true
  },
  {
    input: [
      [1, 2, 3],
      [0],
      [0],
      [0]
    ],
    expected: true
  },
  {
    input: [
      [1, 2, 3],
      [0, 2],
      [0, 1],
      [0]
    ],
    expected: false
  },
  {
    input: [
      [1, 2, 3],
      [0, 2, 3],
      [0, 1],
      [0, 1]
    ],
    expected: false
  },
  {
    input: [
      [2],
      [2, 3],
      [0, 1],
      [1]
    ],
    expected: true
  },
  {
    input: [
      [1, 2],
      [0, 2, 3],
      [0, 1, 3],
      [1, 2]
    ],
    expected: false
  },
  {
    input: [
      [1, 4],
      [0, 2, 3],
      [1, 3, 4],
      [1, 2],
      [0, 2]
    ],
    expected: false
  },
  {
    input: [
      [1, 4],
      [0, 2, 3],
      [1, 4],
      [1],
      [0, 2]
    ],
    expected: true
  },
];
