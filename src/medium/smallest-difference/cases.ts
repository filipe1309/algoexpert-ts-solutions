export default [
  {
    input: {
      arrayOne: [ -1, 5, 10, 20, 28, 3 ],
      arrayTwo: [ 26, 134, 135, 15, 17 ]
    },
    expected: [ 28, 26 ]
  },
  {
    input: { arrayOne: [ -1, 5, 10, 20, 3 ], arrayTwo: [ 26, 134, 135, 15, 17 ] },
    expected: [20, 17]
  },
  {
    input: {
      arrayOne: [ 10, 0, 20, 25 ],
      arrayTwo: [ 1005, 1006, 1014, 1032, 1031 ]
    },
    expected: [25, 1005]
  },
  {
    input: {
      arrayOne: [ 10, 0, 20, 25, 2200 ],
      arrayTwo: [ 1005, 1006, 1014, 1032, 1031 ]
    },
    expected: [25, 1005]
  },
  {
    input: {
      arrayOne: [ 10, 0, 20, 25, 2000 ],
      arrayTwo: [ 1005, 1006, 1014, 1032, 1031 ]
    },
    expected: [2000, 1032]
  },
  {
    input: {
      arrayOne: [ 240, 124, 86, 111, 2, 84, 954, 27, 89 ],
      arrayTwo: [ 1, 3, 954, 19, 8 ]
    },
    expected: [954, 954]
  },
  {
    input: { arrayOne: [ 0, 20 ], arrayTwo: [ 21, -2 ] },
    expected: [20, 21]
  },
  {
    input: {
      arrayOne: [ 10, 1000 ],
      arrayTwo: [ -1441, -124, -25, 1014, 1500, 660, 410, 245, 530 ]
    },
    expected: [1000, 1014]
  },
  {
    input: {
      arrayOne: [ 10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123 ],
      arrayTwo: [ -1441, -124, -25, 1014, 1500, 660, 410, 245, 530 ]
    },
    expected: [-123, -124]
  },
  {
    input: {
      arrayOne: [ 10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530 ],
      arrayTwo: [ -1441, -124, -25, 1014, 1500, 660,410, 245, 530 ]
    },
    expected: [530, 530]
  }
];
