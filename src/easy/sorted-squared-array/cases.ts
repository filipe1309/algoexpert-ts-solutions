export default [
  {
    array: [1, 2, 3, 5, 6, 8, 9],
    expected: [1, 4, 9, 25, 36, 64, 81]
  },
  {
    array: [1],
    expected: [1]
  },
  {
    array: [1, 2],
    expected: [1, 4]
  },
  {
    array: [1, 2, 3, 4, 5],
    expected: [1, 4, 9, 16, 25]
  },
  {
    array: [0],
    expected: [0]
  },
  {
    array: [10],
    expected: [100]
  },
  {
    array: [-1],
    expected: [1]
  },
  {
    array: [-2, -1],
    expected: [1, 4]
  },
  {
    array: [-5, -4, -3, -2, -1],
    expected: [1, 4, 9, 16, 25]
  },
  {
    array: [-10],
    expected: [100]
  },
  {
    array: [-10, -5, 0, 5, 10],
    expected: [0, 25, 25, 100, 100]
  },
  {
    array: [-7, -3, 1, 9, 22, 30],
    expected: [1, 9, 49, 81, 484, 900]
  },
  {
    array: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
    expected: [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
  },
  {
    array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    array: [-1, -1, 2, 3, 3, 3, 4],
    expected: [1, 1, 4, 9, 9, 9, 16]
  },
  {
    array: [-3, -2, -1],
    expected: [1, 4, 9]
  }
];
