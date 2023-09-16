export default [
  {
    input: [ 10, 4, 2, 1, 5, 17, 19, 18 ],
    expected: {
      nodes: [
        { left: 4, right: 17, value: 10},
        { left: null, right: 19, value: 17},
        { left: 18, right: null, value: 19},
        { left: null, right: null, value: 18},
        { left: 2, right: 5, value: 4},
        { left: null, right: null, value: 5},
        { left: 1, right: null, value: 2},
        { left: null, right: null, value: 1}
      ],
      root: 10
    }
  },
  {
    input: [ 100 ],
    expected: {
      nodes: [
        { left: null, right: null, value: 100}
      ],
      root: 100
    }
  },
  {
    input: [ 10, 9, 8, 7, 6, 5 ],
    expected: {
      nodes: [
        { left: 9, right: null, value: 10},
        { left: 8, right: null, value: 9},
        { left: 7, right: null, value: 8},
        { left: 6, right: null, value: 7},
        { left: 5, right: null, value: 6},
        { left: null, right: null, value: 5}
      ],
      root: 10
    }
  },
  {
    input: [ 5, 6, 7, 8 ],
    expected: {
      nodes: [
        { left: null, right: 6, value: 5},
        { left: null, right: 7, value: 6},
        { left: null, right: 8, value: 7},
        { left: null, right: null, value: 8}
      ],
      root: 5
    }
  },
  {
    input: [ 5, -10, -5, 6, 9, 7 ],
    expected: {
      nodes: [
        { left: -10, right: 6, value: 5},
        { left: null, right: 9, value: 6},
        { left: 7, right: null, value: 9},
        { left: null, right: null, value: 7},
        { left: null, right: -5, value: -10},
        { left: null, right: null, value: -5}
      ],
      root: 5
    }
  },
  {
    input: [ 10, 4, 2, 1, 3, 5, 6, 9, 7, 17, 19, 18 ],
    expected: {
      nodes: [
        { left: 4, right: 17, value: 10},
        { left: null, right: 19, value: 17},
        { left: 18, right: null, value: 19},
        { left: null, right: null, value: 18},
        { left: 2, right: 5, value: 4},
        { left: null, right: 6, value: 5},
        { left: null, right: 9, value: 6},
        { left: 7, right: null, value: 9},
        { left: null, right: null, value: 7},
        { left: 1, right: 3, value: 2},
        { left: null, right: null, value: 3},
        { left: null, right: null, value: 1}
      ],
      root: 10
    }
  },
  {
    input: [ 1, 0, 2 ],
    expected: {
      nodes: [
        { left: 0, right: 2, value: 1},
        { left: null, right: null, value: 2},
        { left: null, right: null, value: 0}
      ],
      root: 1
    }
  },
  {
    input: [ 2, 0, 1 ],
    expected: {
      nodes: [
        { left: 0, right: null, value: 2},
        { left: null, right: 1, value: 0},
        { left: null, right: null, value: 1}
      ],
      root: 2
    }
  },
  {
    input: [ 2, 0, 1, 4, 3 ],
    expected: {
      nodes: [
        { left: 0, right: 4, value: 2},
        { left: 3, right: null, value: 4},
        { left: null, right: null, value: 3},
        { left: null, right: 1, value: 0},
        { left: null, right: null, value: 1}
      ],
      root: 2
    }
  },
  {
    input: [ 2, 0, 1, 4, 3, 3 ],
    expected: {
      nodes: [
        { left: 0, right: 4, value: 2},
        { left: 3, right: null, value: 4},
        { left: null, right: 3, value: 3},
        { left: null, right: null, value: 3},
        { left: null, right: 1, value: 0},
        { left: null, right: null, value: 1}
      ],
      root: 2
    }
  },
  {
    input: [ 2, 0, 1, 3, 4, 3 ],
    expected: {
      nodes: [
        { left: 0, right: 3, value: 2},
        { left: null, right: 4, value: 3},
        { left: 3, right: null, value: 4},
        { left: null, right: null, value: 3},
        { left: null, right: 1, value: 0},
        { left: null, right: null, value: 1}
      ],
      root: 2
    }
  },
  {
    input: [ 10, 4, 2, 1, 3, 5, 5, 6, 5, 5, 9, 7, 17, 19, 18, 18, 19 ],
    expected: {
      nodes: [
        { left: 4, right: 17, value: 10},
        { left: null, right: 19, value: 17},
        { left: 18, right: 19, value: 19},
        { left: null, right: null, value: 19},
        { left: null, right: 18, value: 18},
        { left: null, right: null, value: 18},
        { left: 2, right: 5, value: 4},
        { left: null, right: 5, value: 5},
        { left: null, right: 6, value: 5},
        { left: 5, right: 9, value: 6},
        { left: 7, right: null, value: 9},
        { left: null, right: null, value: 7},
        { left: null, right: 5, value: 5},
        { left: null, right: null, value: 5},
        { left: 1, right: 3, value: 2},
        { left: null, right: null, value: 3},
        { left: null, right: null, value: 1}
      ],
      root: 10
    }
  },
];
