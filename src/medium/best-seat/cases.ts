export default [
  {
    input: [ 1 ],
    expected: -1
  },
  {
    input: [ 1, 0, 1, 0, 0, 0, 1 ],
    expected: 4
  },
  {
    input: [ 1, 0, 1 ],
    expected: 1
  },
  {
    input: [ 1, 0, 0, 1 ],
    expected: 1
  },
  {
    input: [ 1, 1, 1 ],
    expected: -1
  },
  {
    input: [ 1, 0, 0, 1, 0, 0, 1 ],
    expected: 1
  },
  {
    input: [ 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1 ],
    expected: 3
  },
  {
    input: [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1 ],
    expected: 4
  },
  {
    input: [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1 ],
    expected: 4
  },
  {
    input: [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    expected: 13
  },
  {
    input: [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1 ],
    expected: 13
  },
  {
    input: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
    expected: 6
  },
  {
    input: [ 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
    expected: 3
  },
  {
    input: [ 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1 ],
    expected: 5
  },
];
