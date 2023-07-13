import solution from './solution';

test('two number sum', () => {
  const tests = {
    'test 1': {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 10,
      expected: [11, -1]
    },
    'test 2': {
      array: [4, 6],
      targetSum: 10,
      expected: [4, 6]
    },
    'test 3': {
      array: [4, 6, 1],
      targetSum: 5,
      expected: [4, 1]
    },
    'test 4': {
      array: [4, 6, 1, -3],
      targetSum: 3,
      expected: [6, -3]
    },
    'test 5': {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targetSum: 17,
      expected: [8, 9]
    },
    'test 6': {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
      targetSum: 18,
      expected: [3, 15]
    },
    'test 7': {
      array: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
      targetSum: -5,
      expected: [-5, 0]
    },
    'test 8': {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 163,
      expected: [210, -47]
    },
    'test 9': {
      array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
      targetSum: 164,
      expected: []
    },
    'test 10': {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 15,
      expected: []
    },
    'test 11': {
      array: [14],
      targetSum: 15,
      expected: []
    },
    'test 12': {
      array: [15],
      targetSum: 15,
      expected: []
    }
  };
  for (const key in tests) {
    const { array, targetSum, expected } = tests[key];
    const result = solution(array, targetSum);
    //  compare independent of order
    expect(result.sort()).toEqual(expected.sort());
  }
});

