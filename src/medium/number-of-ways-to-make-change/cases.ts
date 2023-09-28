export default [
  {
    input: {
      n: 6,
      denoms: [1, 5]
    },
    expected: 2
  },
  {
    input: {
      n: 0,
      denoms: [2, 3, 4, 7]
    },
    expected: 1
  },
  {
    input: {
      n: 9,
      denoms: [5]
    },
    expected: 0
  },
  {
    input: {
      n: 7,
      denoms: [2, 4]
    },
    expected: 0
  },
  {
    input: {
      n: 4,
      denoms: [1, 5, 10, 25]
    },
    expected: 1
  },
  {
    input: {
      n: 5,
      denoms: [1, 5, 10, 25]
    },
    expected: 2
  },
  {
    input: {
      n: 10,
      denoms: [1, 5, 10, 25]
    },
    expected: 4
  },
  {
    input: {
      n: 25,
      denoms: [1, 5, 10, 25]
    },
    expected: 13
  },
  {
    input: {
      n: 12,
      denoms: [2, 3, 7]
    },
    expected: 4
  },
  {
    input: {
      n: 7,
      denoms: [2, 3, 4, 7]
    },
    expected: 3
  },
];
