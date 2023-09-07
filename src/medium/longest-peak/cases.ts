export default [
  {
    input: [ 1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3 ],
    expected: 6
  },
  {
    input: [],
    expected: 0
  },
  {
    input: [ 1, 3, 2 ],
    expected: 3
  },
  {
    input: [ 1, 2, 3, 4, 5, 1 ],
    expected: 6
  },
  {
    input: [ 5, 4, 3, 2, 1, 2, 1 ],
    expected: 3
  },
  {
    input: [ 5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10 ],
    expected: 5
  },
  {
    input: [ 5, 4, 3, 2, 1, 2, 10, 12 ],
    expected: 0
  },
  {
    input: [ 1, 2, 3, 4, 5, 6, 10, 100, 1000 ],
    expected: 0
  },
  {
    input: [ 1, 2, 3, 3, 2, 1 ],
    expected: 0
  },
  {
    input: [ 1, 1, 3, 2, 1 ],
    expected: 4
  },
  {
    input: [ 1, 2, 3, 2, 1, 1 ],
    expected: 5
  },
  {
    input: [ 1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1 ],
    expected: 9
  },
  {
    input: [ 1, 2, 3, 3, 4, 0, 10 ],
    expected: 3
  }
];
