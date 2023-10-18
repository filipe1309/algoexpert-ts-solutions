export default [
  {
    input: {
      distances: [5, 25, 15, 10, 15],
      fuel: [1, 2, 1, 0, 3],
      mpg: 10
    },
    expected: 4
  },
  {
    input: {
      distances: [10, 20, 10, 15, 5, 15, 25],
      fuel: [0, 2, 1, 0, 0, 1, 1],
      mpg: 20
    },
    expected: 1
  },
  {
    input: {
      distances: [30, 25, 5, 100, 40],
      fuel: [3, 2, 1, 0, 4],
      mpg: 20
    },
    expected: 4
  },
  {
    input: {
      distances: [1, 3, 10, 6, 7, 7, 2, 4],
      fuel: [1, 1, 1, 1, 1, 1, 1, 1],
      mpg: 5
    },
    expected: 6
  },
  {
    input: {
      distances: [5, 2, 3],
      fuel: [1, 0, 1],
      mpg: 5
    },
    expected: 2
  },
  {
    input: {
      distances: [4, 6],
      fuel: [1, 9],
      mpg: 1
    },
    expected: 1
  },
  {
    input: {
      distances: [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
      fuel: [1, 2, 0, 1, 1, 0, 3, 1, 0, 1],
      mpg: 25
    },
    expected: 1
  },
  {
    input: {
      distances: [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
      fuel: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      mpg: 25
    },
    expected: 0
  },
  {
    input: {
      distances: [15, 20, 25, 30, 35, 5],
      fuel: [0, 3, 0, 0, 1, 1],
      mpg: 26
    },
    expected: 5
  },
  {
    input: {
      distances: [10, 10, 10, 10],
      fuel: [1, 2, 3, 4],
      mpg: 4
    },
    expected: 2
  },
];
