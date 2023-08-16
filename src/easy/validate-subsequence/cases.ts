export default [
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 6, -1, 8, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [22, 25, 6],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, -1, 8, 10],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [25],
    expected: true,
  },
  {
    array: [1, 1, 1, 1, 1],
    sequence: [1, 1, 1],
    expected: true,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 23, 6, -1, 8, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 22, 6, -1, 8, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, -1],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, -1, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, -2],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [26],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 25, 22, 6, -1, 8, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 26, 22, 8],
    expected: false,
  },
  {
    array: [1, 1, 6, 1],
    sequence: [1, 1, 1, 6],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, 10, 11, 11, 11, 11],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
    expected: false,
  },
  {
    array: [5, 1, 22, 25, 6, -1, 8, 10],
    sequence: [1, 6, -1, 5],
    expected: false,
  },
];
