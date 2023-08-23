export default [
  {
    input: [],
    expected: 0
  },

  {
    input: [ { deadline: 1, payment: 1 } ],
    expected: 1
  },

  {
    input: [ { deadline: 1, payment: 2 }, { deadline: 1, payment: 1 } ],
    expected: 2
  },

  {
    input: [ { deadline: 1, payment: 1 }, { deadline: 1, payment: 2 } ],
    expected: 2
  },

  {
    input: [ { deadline: 1, payment: 1 }, { deadline: 2, payment: 1 } ],
    expected: 2
  },

  {
    input: [
      { deadline: 1, payment: 1 },
      { deadline: 2, payment: 2 },
      { deadline: 2, payment: 1 }
    ],
    expected: 3
  },

  {
    input: [
      { deadline: 8, payment: 3 },
      { deadline: 1, payment: 1 },
      { deadline: 1, payment: 2 }
    ],
    expected: 5
  },

  {
    input: [
      { deadline: 2, payment: 2 },
      { deadline: 4, payment: 3 },
      { deadline: 5, payment: 1 },
      { deadline: 7, payment: 2 },
      { deadline: 3, payment: 1 },
      { deadline: 3, payment: 2 },
      { deadline: 1, payment: 3 }
    ],
    expected: 13
  },

  {
    input: [
      { deadline: 2, payment: 1 },
      { deadline: 2, payment: 2 },
      { deadline: 2, payment: 3 },
      { deadline: 2, payment: 4 },
      { deadline: 2, payment: 5 },
      { deadline: 2, payment: 6 },
      { deadline: 2, payment: 7 }
    ],
    expected: 13
  },

  {
    input: [
      { deadline: 8, payment: 1 },
      { deadline: 6, payment: 4 },
      { deadline: 1, payment: 2 },
      { deadline: 1, payment: 3 },
      { deadline: 2, payment: 3 },
      { deadline: 5, payment: 2 }
    ],
    expected: 13
  },

  {
    input: [
      { deadline: 2, payment: 1 },
      { deadline: 1, payment: 4 },
      { deadline: 3, payment: 2 },
      { deadline: 1, payment: 3 },
      { deadline: 4, payment: 3 },
      { deadline: 4, payment: 2 },
      { deadline: 4, payment: 1 },
      { deadline: 5, payment: 4 },
      { deadline: 8, payment: 1 }
    ],
    expected: 16
  },

  {
    input: [ { deadline: 10, payment: 1 } ],
    expected: 1
  },

  {
    input: [
      { deadline: 1, payment: 1 },
      { deadline: 2, payment: 1 },
      { deadline: 3, payment: 1 },
      { deadline: 4, payment: 1 },
      { deadline: 5, payment: 1 },
      { deadline: 6, payment: 1 },
      { deadline: 7, payment: 1 },
      { deadline: 8, payment: 1 },
      { deadline: 9, payment: 1 },
      { deadline: 10, payment: 1 }
    ],
    expected: 7
  }

];
