export default [
  {
    input: [],
    expected: false
  },
  {
    input: [ 0 ],
    expected: true
  },
  {
    input: [ 1 ],
    expected: false
  },
  {
    input: [ 1, 2, 3 ],
    expected: false
  },
  {
    input: [ 1, 1, 1 ],
    expected: false
  },
  {
    input: [ -1, -1, -1 ],
    expected: false
  },
  {
    input: [ 0, 0, 0 ],
    expected: true
  },
  {
    input: [ 1, 2, -2, 3 ],
    expected: true
  },
  {
    input: [ 2, -2 ],
    expected: true
  },
  {
    input: [ -1, 2, 3, 4, -5, -3, 1, 2 ],
    expected: true
  },
  {
    input: [ -2, -3, -1, 2, 3, 4, -5, -3, 1, 2 ],
    expected: true
  },
  {
    input: [ 2, 3, 4, -5, -3, 4, 5 ],
    expected: true
  },
  {
    input: [ 2, 3, 4, -5, -3, 5, 5 ],
    expected: false
  },
  {
    input: [ 1, 2, 3, 4, 0, 5, 6, 7 ],
    expected: true
  },
  {
    input: [ 1, 2, 3, -2, -1 ],
    expected: true
  },
  {
    input: [-8, -22, 104, 73, -120, 53, 22, -12, 1, 14, -90, 13, -22 ],
    expected: false
  },
  {
    input: [ -8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22 ],
    expected: true
  }
]

