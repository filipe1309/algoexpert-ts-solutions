export default [
  {
    input: [2, 3, 1, -4, -4, 2],
    expected: true
  },
  {
    input: [2, 2, -1],
    expected: true
  },
  {
    input: [2, 2, 2],
    expected: true
  },
  {
    input: [1, 1, 1, 1, 1],
    expected: true
  },
  {
    input: [-1, 2, 2],
    expected: true
  },
  {
    input: [0, 1, 1, 1, 1],
    expected: false
  },
  {
    input: [1, 1, 0, 1, 1],
    expected: false
  },
  {
    input: [1, 1, 1, 1, 2],
    expected: false
  },
  {
    input: [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
    expected: true
  },
  {
    input: [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
    expected: false
  },
  {
    input: [1, 2, 3, 4, -2, 3, 7, 8, 1],
    expected: true
  },
  {
    input: [1, 2, 3, 4, -2, 3, 7, 8, -8],
    expected: true
  },
  {
    input: [1, 2, 3, 4, -2, 3, 7, 8, -26],
    expected: true
  },
  {
    input: [10, 11, -6, -23, -2, 3, 88, 908, -26],
    expected: true
  },
  {
    input: [10, 11, -6, -23, -2, 3, 88, 909, -26],
    expected: false
  },
  {
    input: [1, -1, 1, -1],
    expected: false
  },
]
