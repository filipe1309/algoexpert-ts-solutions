export default [
  {
    input: {
        redShirtSpeeds: [ 5, 5, 3, 9, 2 ],
        blueShirtSpeeds: [ 3, 6, 7, 2, 1 ],
        fastest: true
      },
    expected: 32
  },
  {
    input: {
      redShirtSpeeds: [ 5, 5, 3, 9, 2 ],
      blueShirtSpeeds: [ 3, 6, 7, 2, 1 ],
      fastest: false
    },
    expected: 25
  },
  {
    input: {
      redShirtSpeeds: [ 1, 2, 1, 9, 12, 3 ],
      blueShirtSpeeds: [ 3, 3, 4, 6, 1, 2 ],
      fastest: false
    },
    expected: 30
  },
  {
    input: {
      redShirtSpeeds: [ 1, 2, 1, 9, 12, 3 ],
      blueShirtSpeeds: [ 3, 3, 4, 6, 1, 2 ],
      fastest: true
    },
    expected: 37
  },
  {
    input: {
      redShirtSpeeds: [ 1, 2,  1,  9,  12, 3, 1, 54, 21, 231, 32, 1 ],
      blueShirtSpeeds: [ 3,  3, 4,  6,   1, 2,  5, 6, 34, 256, 123, 32 ],
      fastest: true
    },
    expected: 816
  },
  {
    input: {
      redShirtSpeeds: [ 1, 2,  1,  9,  12, 3, 1, 54, 21, 231, 32, 1 ],
      blueShirtSpeeds: [ 3,  3, 4,  6,   1, 2,  5, 6, 34, 256, 123, 32 ],
      fastest: false
    },
    expected: 484
  },
  {
    input: {
      redShirtSpeeds: [ 1 ],
      blueShirtSpeeds: [ 5 ],
      fastest: true
    },
    expected: 5
  },
  {
    input: {
      redShirtSpeeds: [ 1 ],
      blueShirtSpeeds: [ 5 ],
      fastest: false
    },
    expected: 5
  },
  {
    input: {
      redShirtSpeeds: [ 1, 1, 1, 1 ],
      blueShirtSpeeds: [ 1, 1, 1, 1 ],
      fastest: true
    },
    expected: 4
  },
  {
    input: {
      redShirtSpeeds: [ 1, 1, 1, 1 ],
      blueShirtSpeeds: [ 1, 1, 1, 1 ],
      fastest: false
    },
    expected: 4
  },
  {
    input: {
      redShirtSpeeds: [ 1, 1, 1, 1,  2, 2, 2, 2, 9, 11 ],
      blueShirtSpeeds: [ 1, 1, 1, 1, 3, 3, 3, 3, 5, 7 ],
      fastest: true
    },
    expected: 48
  },
  {
    input: {
      redShirtSpeeds: [ 1, 1, 1, 1,  2, 2, 2, 2, 9, 11 ],
      blueShirtSpeeds: [ 1, 1, 1, 1, 3, 3, 3, 3, 5, 7 ],
      fastest: false
    },
    expected: 36
  },
  {
    input: {
      redShirtSpeeds: [ 9, 8, 2, 2, 3, 5, 6 ],
      blueShirtSpeeds: [ 3, 4, 4, 1, 1, 8, 9 ],
      fastest: true
    },
    expected: 49
  },
  {
    input: {
      redShirtSpeeds: [ 9, 8, 2, 2, 3, 5, 6 ],
      blueShirtSpeeds: [ 3, 4, 4, 1, 1, 8, 9 ],
      fastest: false
    },
    expected: 35
  },
  {
    input: {
      redShirtSpeeds: [ 5, 4, 3, 2, 1 ],
      blueShirtSpeeds: [ 1, 2, 3, 4, 5 ],
      fastest: false
    },
    expected: 15
  },
  {
    input: {
      redShirtSpeeds: [ 5, 4, 3, 2, 1 ],
      blueShirtSpeeds: [ 1, 2, 3, 4, 5 ],
      fastest: true
    },
    expected: 21
  },
  {
    input: {
      redShirtSpeeds: [],
      blueShirtSpeeds: [],
      fastest: true
    },
    expected: 0
  },
];
