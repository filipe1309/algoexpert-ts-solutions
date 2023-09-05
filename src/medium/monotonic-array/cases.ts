export default [
  {
    input: [ -1, -5, -10, -1100, -1100, -1101, -1102, -9001 ],
    expected: true
  },
  {
    input: [],
    expected: true
  },
  {
    input: [ 1 ],
    expected: true
  },
  {
    input: [ 1, 2 ],
    expected: true
  },
  {
    input: [ 2, 1 ],
    expected: true
  },
  {
    input: [ 1, 5, 10, 1100, 1101, 1102, 9001 ],
    expected: true
  },
  {
    input: [ -1, -5, -10, -1100, -1101, -1102, -9001 ],
    expected: true
  },
  {
    input: [ -1, -5, -10, -1100, -900, -1101, -1102, -9001 ],
    expected: false
  },
  {
    input: [ 1, 2, 0 ],
    expected: false
  },
  {
    input: [ 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11 ],
    expected: false
  },
  {
    input: [ 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11 ],
    expected: true
  },
  {
    input: [ -1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11 ],
    expected: false
  },
  {
    input: [ -1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11 ],
    expected: true
  },
  {
    input: [ -1, -1, -1, -1, -1, -1, -1, -1 ],
    expected: true
  },
  {
    input: [ 1, 2, -1, -2, -5 ],
    expected: false
  },
  {
    input: [ -1, -5, 10 ],
    expected: false
  },
  {
    input: [ 2, 2, 2, 1, 4, 5 ],
    expected: false
  },
  {
    input: [ 1, 1, 1, 2, 3, 4, 1 ],
    expected: false
  },
  {
    input: [ 1, 2, 3, 3, 2, 1 ],
    expected: false
  }
];
