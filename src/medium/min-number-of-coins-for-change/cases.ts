export default [
  {
    input: {
      n: 7,
      denoms: [1, 5, 10]
    },
    expected: 3
  },
  {
    input: {
      n: 7,
      denoms: [1, 10, 5]
    },
    expected: 3
  },
  {
    input: {
      n: 7,
      denoms: [10, 1, 5]
    },
    expected: 3
  },
  {
    input: {
      n: 0,
      denoms: [1, 2, 3]
    },
    expected: 0
  },
  {
    input: {
      n: 3,
      denoms: [2, 1]
    },
    expected: 2
  },
  {
    input: {
      n: 4,
      denoms: [1, 5, 10]
    },
    expected: 4
  },
  {
    input: {
      n: 10,
      denoms: [1, 5, 10]
    },
    expected: 1
  },
  {
    input: {
      n: 11,
      denoms: [1, 5, 10]
    },
    expected: 2
  },
  {
    input: {
      n: 24,
      denoms: [1, 5, 10]
    },
    expected: 6
  },
  {
    input: {
      n: 25,
      denoms: [1, 5, 10]
    },
    expected: 3
  },
  {
    input: {
      n: 7,
      denoms: [2, 4]
    },
    expected: -1
  },
  {
    input: {
      n: 7,
      denoms: [3, 7]
    },
    expected: 1
  },
  {
    input: {
      n: 9,
      denoms: [3, 5]
    },
    expected: 3
  },
  {
    input: {
      n: 9,
      denoms: [3, 4, 5]
    },
    expected: 2
  },
  {
    input: {
      n: 135,
      denoms: [39, 45, 130, 40, 4, 1]
    },
    expected: 3
  },
  {
    input: {
      n: 135,
      denoms: [39, 45, 130, 40, 4, 1, 60, 75]
    },
    expected: 2
  },
  {
    input: {
      n: 10,
      denoms: [1, 3, 4]
    },
    expected: 3
  }
];
