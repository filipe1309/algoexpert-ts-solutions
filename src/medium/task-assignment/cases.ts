export default [
  {
    input: {
      k: 3,
      tasks: [1, 3, 5, 3, 1, 4]
    },
    expected: 
      [[4, 2], [0, 5], [3, 1]],
      // [[0, 2], [4, 5], [1, 3]]
  },
  {
    input: {
      k: 4,
      tasks: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    expected: [[0, 7], [1, 6], [2, 5], [3, 4]]
  },
  {
    input: {
      k: 5,
      tasks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    expected: 
    [[9, 8], [7, 6], [5, 4], [3, 2], [1, 0]]
    // [ [ 0, 9 ], [ 1, 8 ], [ 2, 7 ], [ 3, 6 ], [ 4, 5 ] ],
  },
  {
    input: {
      k: 1,
      tasks: [3, 5]
    },
    expected: [[0, 1]]
  },
  {
    input: {
      k: 7,
      tasks: [2, 1, 3, 4, 5, 13, 12, 9, 11, 10, 6, 7, 14, 8]
    },
    expected: [[1, 12], [0, 5], [2, 6], [3, 8], [4, 9], [10, 7], [11, 13]]
  },
  {
    input: {
      k: 5,
      tasks: [3, 7, 5, 4, 4, 3, 6, 8, 3, 3]
    },
    expected: 
    [[9, 7], [8, 1], [5, 6], [0, 2], [4, 3]]
    // [ [ 0, 7 ], [ 5, 1 ], [ 8, 6 ], [ 9, 2 ], [ 3, 4 ] ]
  },
  {
    input: {
      k: 10,
      tasks: [5, 6, 2, 3, 15, 15, 16, 19, 2, 10, 10, 3, 3, 32, 12, 1, 23, 32, 9, 2]
    },
    expected: 
    [[15, 17], [19, 13], [8, 16], [2, 7], [12, 6], [11, 5], [3, 4], [0, 14], [1, 10], [18, 9]]
    // [[ 15, 17 ], [ 2, 13 ], [ 8, 16 ],  [ 19, 7 ], [ 3, 6 ],   [ 11, 5 ], [ 12, 4 ],  [ 0, 14 ], [ 1, 10 ],  [ 18, 9 ]]
  },
  {
    input: {
      k: 4,
      tasks: [1, 2, 2, 1, 3, 4, 4, 4]
    },
    expected: 
    [[3, 7], [0, 6], [2, 5], [1, 4]]
    // [ [ 0, 7 ], [ 3, 6 ], [ 1, 5 ], [ 2, 4 ] ]
  },
  {
    input: {
      k: 3,
      tasks: [87, 65, 43, 32, 31, 320]
    },
    expected: [[4, 5], [3, 0], [2, 1]]
  },
  {
    input: {
      k: 2,
      tasks: [3, 4, 5, 3]
    },
    expected: 
    [[3, 2], [0, 1]]
    // [ [ 0, 2 ], [ 3, 1 ] ]
  },
  {
    input: {
      k: 3,
      tasks: [5, 2, 1, 6, 4, 4]
    },
    expected: [[2, 3], [1, 0], [5, 4]]
  },
  {
    input: {
      k: 2,
      tasks: [1, 8, 9, 10]
    },
    expected: [[0, 3], [1, 2]]
  }
];