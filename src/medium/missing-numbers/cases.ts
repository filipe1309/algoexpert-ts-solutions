export default [
  {
    input: [],
    expected: [ 1, 2 ]
  },
  {
    input: [ 1 ],
    expected: [ 2, 3 ]
  },
  {
    input: [ 2 ],
    expected: [ 1, 3 ]
  },
  {
    input: [ 3 ],
    expected: [ 1, 2 ]
  },
  {
    input: [ 1, 3 ],
    expected: [ 2, 4 ]
  },
  {
    input: [ 3, 1 ],
    expected: [ 2, 4 ]
  },
  {
    input: [ 1, 2, 3 ],
    expected: [ 4, 5 ]
  },
  {
    input: [ 3, 2, 1 ],
    expected: [ 4, 5 ]
  },
  {
    input: [ 3, 1, 2 ],
    expected: [ 4, 5 ]
  },
  {
    input: [ 3, 4, 5 ],
    expected: [ 1, 2 ]
  },
  {
    input: [ 4, 5, 3 ],
    expected: [ 1, 2 ]
  },
  {
    input: [ 1, 3, 4, 5 ],
    expected: [ 2, 6 ]
  },
  {
    input: [ 4, 5, 1, 3 ],
    expected: [ 2, 6 ]
  },
  {
    input: [ 1, 2, 4, 5, 7 ],
    expected: [ 3, 6 ]
  },
  {
    input: [ 1, 2, 7, 5, 4 ],
    expected: [ 3, 6 ]
  },
  {
    input: [ 1, 2, 3, 4, 5, 6, 7],
    expected: [ 8, 9 ]
  },
  {
    input: [ 7, 6, 5, 4, 3, 2, 1],
    expected: [ 8, 9 ]
  },
  {
    input: [ 3, 5, 1, 2, 4, 7, 6],
    expected: [ 8, 9 ]
  },
  {
    input: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22],
    expected: [ 14, 19 ]
  },
  {
    input: [ 3, 5, 7, 8, 1, 10, 11, 2, 4, 13, 17, 22, 18, 21, 16, 20, 6, 9, 15, 12],
    expected: [ 14, 19 ]
  },
  {
    input: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    expected: [ 1, 2 ]
  },
  {
    input: [ 14, 15, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    expected: [ 1, 2 ]
  },
  {
    input: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    expected: [ 23, 24 ]
  },
  {
    input: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: [ 23, 24 ]
  },
];
