export default [
  {
    input: [
      [1, 3],
      [2, 3, 4],
      [0],
      [],
      [2, 5],
      []
    ],
    expected: true
  },
  {
    input: [
      [1, 2],
      [2],
      []
    ],
    expected: false
  },
  {
    input: [
      [1, 2],
      [2],
      [1]
    ],
    expected: true
  },
  {
    input: [
      [1, 2],
      [2],
      [1, 3],
      [3]
    ],
    expected: true
  },
  {
    input: [
      [],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0]
    ],
    expected: false
  },
  {
    input: [
      [0]
    ],
    expected: true
  },
  {
    input: [
      [8],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0],
      [7],
      [8],
      [6]
    ],
    expected: true
  },
  {
    input: [
      [1],
      [2, 3, 4, 5, 6, 7],
      [],
      [2, 7],
      [5],
      [],
      [4],
      []
    ],
    expected: false
  },
  {
    input: [
      [1],
      [2, 3, 4, 5, 6, 7],
      [],
      [2, 7],
      [5],
      [],
      [4],
      [0]
    ],
    expected: true
  },
  {
    input: [
      [0],
      [1]
    ],
    expected: true
  },
  {
    input: [
      [1, 2],
      [2],
      []
    ],
    expected: false
  },
  {
    input: [
      [],
      [0, 3],
      [0],
      [1, 2]
    ],
    expected: true
  }
];
