export default [
  {
    input: [ 2 ],
    expected: 2
  },
  {
    input: [ 1, 2, 1 ],
    expected: 1
  },
  {
    input: [ 3, 3, 1 ],
    expected: 3
  },
  {
    input: [ 4, 5, 5 ],
    expected: 5
  },
  {
    input: [ 1, 2, 3, 2, 2, 1, 2 ],
    expected: 2
  },
  {
    input: [ 1, 2, 3, 2, 3, 2, 2, 4, 2 ],
    expected: 2
  },
  {
    input: [ 1, 1, 1, 1, 1, 1, 1 ],
    expected: 1
  },
  {
    input: [ 5, 4, 3, 2, 1, 1, 1, 1, 1 ],
    expected: 1
  },
  {
    input: [ 1, 1, 1, 1, 1, 5, 4, 3, 2 ],
    expected: 1
  },
  {
    input: [ 1, 1, 1, 1, 2, 2, 2, 2, 2 ],
    expected: 2
  },
  {
    input: [ 435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543 ],
    expected: 6543
  },
  {
    input: [ 1, 2, 2, 2, 1 ],
    expected: 2
  },
  {
    input: [ 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1 ],
    expected: 4
  },
  {
    input: [ 1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1 ],
    expected: 2
  },
];
