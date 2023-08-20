export default [
  {
    input: {
      redShirtHeights: [ 5, 8, 1, 3, 4 ],
      blueShirtHeights: [ 6, 9, 2, 4, 5 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 6, 9, 2, 4, 5 ],
      blueShirtHeights: [ 5, 8, 1, 3, 4 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 6, 9, 2, 4, 5, 1 ],
      blueShirtHeights: [ 5, 8, 1, 3, 4, 9 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 6 ],
      blueShirtHeights: [ 6 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 126 ],
      blueShirtHeights: [ 125 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 1, 2, 3, 4, 5 ],
      blueShirtHeights: [ 2, 3, 4, 5, 6 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 1, 1, 1, 1, 1, 1, 1, 1 ],
      blueShirtHeights: [ 5,6, 7, 2, 3, 1, 2, 3 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 1, 1, 1, 1, 1, 1, 1, 1 ],
      blueShirtHeights: [ 2, 2, 2, 2,2, 2, 2, 2 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 125 ],
      blueShirtHeights: [ 126 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 19, 2, 4, 6, 2, 3, 1, 1, 4 ],
      blueShirtHeights: [ 21, 5, 4, 4, 4, 4, 4, 4, 4 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 19, 19, 21, 1, 1, 1, 1, 1 ],
      blueShirtHeights: [ 20, 5, 4, 4, 4, 4, 4, 4 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 3, 5, 6, 8, 2 ],
      blueShirtHeights: [ 2, 4, 7, 5, 1 ]
    },
    expected: true
  },
  {
    input: {
      redShirtHeights: [ 3, 5, 6, 8, 2, 1 ],
      blueShirtHeights: [ 2, 4, 7, 5, 1, 6 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 4, 5 ],
      blueShirtHeights: [ 5, 4 ]
    },
    expected: false
  },
  {
    input: {
      redShirtHeights: [ 5, 6 ],
      blueShirtHeights: [ 5, 4 ]
    },
    expected: true
  },
];
