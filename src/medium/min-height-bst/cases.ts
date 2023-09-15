export default [
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22 ],
    expected: {
      nodes: [
        { left: 2, right: 14, value: 10 },
        { left: 13, right: 15, value: 14 },
        { left: null, right: 22, value: 15 },
        { left: null, right: null, value: 22 },
        { left: null, right: null, value: 13 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: 7, value: 5 },
        { left: null, right: null, value: 7 },
        { left: null, right: null, value: 1 }
      ],
      root: 10
    }
  },
  {
    input: [ 1 ],
    expected: {
      nodes: [
        { left: null, right: null, value: 1 }
      ],
      root: 1
    }
  },
  {
    input: [ 1, 2 ],
    expected: {
      nodes: [
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 1
    }
  },
  {
    input: [ 1, 2, 5 ],
    expected: {
      nodes: [
        { left: 1, right: 5, value: 2 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 1 }
      ],
      root: 2
    }
  },
  {
    input: [ 1, 2, 5, 7 ],
    expected: {
      nodes: [
        { left: 1, right: 5, value: 2 },
        { left: null, right: 7, value: 5 },
        { left: null, right: null, value: 7 },
        { left: null, right: null, value: 1 }
      ],
      root: 2
    }
  },
  {
    input: [ 1, 2, 5, 7, 10 ],
    expected: {
      nodes: [
        { left: 1, right: 7, value: 5 },
        { left: null, right: 10, value: 7 },
        { left: null, right: null, value: 10 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 5
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13 ],
    expected: {
      nodes: [
        { left: 1, right: 10, value: 5 },
        { left: 7, right: 13, value: 10 },
        { left: null, right: null, value: 13 },
        { left: null, right: null, value: 7 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 5
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14 ],
    expected: {
      nodes: [
        { left: 2, right: 13, value: 7 },
        { left: 10, right: 14, value: 13 },
        { left: null, right: null, value: 14 },
        { left: null, right: null, value: 10 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 1 }
      ],
      root: 7
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15 ],
    expected: {
      nodes: [
        { left: 2, right: 13, value: 7 },
        { left: 10, right: 14, value: 13 },
        { left: null, right: 15, value: 14 },
        { left: null, right: null, value: 15 },
        { left: null, right: null, value: 10 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 1 }
      ],
      root: 7
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22 ],
    expected: {
      nodes: [
        { left: 2, right: 14, value: 10 },
        { left: 13, right: 15, value: 14 },
        { left: null, right: 22, value: 15 },
        { left: null, right: null, value: 22 },
        { left: null, right: null, value: 13 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: 7, value: 5 },
        { left: null, right: null, value: 7 },
        { left: null, right: null, value: 1 }
      ],
      root: 10
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28 ],
    expected: {
      nodes: [
        { left: 2, right: 15, value: 10 },
        { left: 13, right: 22, value: 15 },
        { left: null, right: 28, value: 22 },
        { left: null, right: null, value: 28 },
        { left: null, right: 14, value: 13 },
        { left: null, right: null, value: 14 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: 7, value: 5 },
        { left: null, right: null, value: 7 },
        { left: null, right: null, value: 1 }
      ],
      root: 10
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32 ],
    expected: {
      nodes: [
        { left: 5, right: 22, value: 13 },
        { left: 14, right: 28, value: 22 },
        { left: null, right: 32, value: 28 },
        { left: null, right: null, value: 32 },
        { left: null, right: 15, value: 14 },
        { left: null, right: null, value: 15 },
        { left: 1, right: 7, value: 5 },
        { left: null, right: 10, value: 7 },
        { left: null, right: null, value: 10 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 13
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36 ],
    expected: {
      nodes: [
        { left: 5, right: 22, value: 13 },
        { left: 14, right: 32, value: 22 },
        { left: 28, right: 36, value: 32 },
        { left: null, right: null, value: 36 },
        { left: null, right: null, value: 28 },
        { left: null, right: 15, value: 14 },
        { left: null, right: null, value: 15 },
        { left: 1, right: 7, value: 5 },
        { left: null, right: 10, value: 7 },
        { left: null, right: null, value: 10 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 13
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36, 89 ],
    expected: {
      nodes: [
        { left: 5, right: 28, value: 14 },
        { left: 15, right: 36, value: 28 },
        { left: 32, right: 89, value: 36 },
        { left: null, right: null, value: 89 },
        { left: null, right: null, value: 32 },
        { left: null, right: 22, value: 15 },
        { left: null, right: null, value: 22 },
        { left: 1, right: 10, value: 5 },
        { left: 7, right: 13, value: 10 },
        { left: null, right: null, value: 13 },
        { left: null, right: null, value: 7 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 14
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36, 89, 92 ],
    expected: {
      nodes: [
        { left: 5, right: 32, value: 14 },
        { left: 22, right: 89, value: 32 },
        { left: 36, right: 92, value: 89 },
        { left: null, right: null, value: 92 },
        { left: null, right: null, value: 36 },
        { left: 15, right: 28, value: 22 },
        { left: null, right: null, value: 28 },
        { left: null, right: null, value: 15 },
        { left: 1, right: 10, value: 5 },
        { left: 7, right: 13, value: 10 },
        { left: null, right: null, value: 13 },
        { left: null, right: null, value: 7 },
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 14
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36, 89, 92, 9000 ],
    expected: {
      nodes: [
        { left: 7, right: 36, value: 15 },
        { left: 28, right: 92, value: 36 },
        { left: 89, right: 9000, value: 92 },
        { left: null, right: null, value: 9000 },
        { left: null, right: null, value: 89 },
        { left: 22, right: 32, value: 28 },
        { left: null, right: null, value: 32 },
        { left: null, right: null, value: 22 },
        { left: 2, right: 13, value: 7 },
        { left: 10, right: 14, value: 13 },
        { left: null, right: null, value: 14 },
        { left: null, right: null, value: 10 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 1 }
      ],
      root: 15
    }
  },
  {
    input: [ 1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36, 89, 92, 9000, 9001 ],
    expected: {
      nodes: [
        { left: 7, right: 36, value: 15 },
        { left: 28, right: 92, value: 36 },
        { left: 89, right: 9000, value: 92 },
        { left: null, right: 9001, value: 9000 },
        { left: null, right: null, value: 9001 },
        { left: null, right: null, value: 89 },
        { left: 22, right: 32, value: 28 },
        { left: null, right: null, value: 32 },
        { left: null, right: null, value: 22 },
        { left: 2, right: 13, value: 7 },
        { left: 10, right: 14, value: 13 },
        { left: null, right: null, value: 14 },
        { left: null, right: null, value: 10 },
        { left: 1, right: 5, value: 2 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 1 }
      ],
      root: 15
    }
  }
];
