export default [
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 33
    },
    expected: 3
  },
  {
    input: {
      array: [ 1, 5, 23, 111 ],
      target: 111
    },
    expected: 3
  },
  {
    input: {
      array: [ 1, 5, 23, 111 ],
      target: 5
    },
    expected: 1
  },
  {
    input: {
      array: [ 1, 5, 23, 111 ],
      target: 35
    },
    expected: -1
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 0
    },
    expected: 0
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 1
    },
    expected: 1
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 21
    },
    expected: 2
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 45
    },
    expected: 4
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 61
    },
    expected: 6
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 71
    },
    expected: 7
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 72
    },
    expected: 8
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 73
    },
    expected: 9
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73 ],
      target: 70
    },
    expected: -1
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73, 355 ],
      target: 355
    },
    expected: 10
  },
  {
    input: {
      array: [ 0,  1, 21, 33, 45, 45, 61, 71, 72, 73, 355 ],
      target: 354
    },
    expected: -1
  },
  {
    input: {
      array: [ 1, 5, 23, 111 ],
      target: 120
    },
    expected: -1
  },
  {
    input: {
      array: [ 5, 23, 111 ],
      target: 3
    },
    expected: -1
  }
]
