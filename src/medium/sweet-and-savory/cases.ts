export default [
  {
    input: {
      dishes: [],
      target: 10
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 4 ],
      target: 10
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ -5, 10 ],
      target: 4
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [],
      target: -10
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 4 ],
      target: -10
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ -5, 10 ],
      target: -4
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 5, -10 ],
      target: -4
    },
    expected: [-10, 5]
  },
  {
    input: {
      dishes: [ -5, 10 ],
      target: 5
    },
    expected: [-5, 10]
  },
  {
    input: {
      dishes: [ -5, 10 ],
      target: 0
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 5, -10 ],
      target: 0
    },
    expected: [-10, 5]
  },
  {
    input: {
      dishes: [ 10, -5 ],
      target: 5
    },
    expected: [-5, 10]
  },
  {
    input: {
      dishes: [ 10, -5 ],
      target: 100
    },
    expected: [-5, 10]
  },
  {
    input: {
      dishes: [ 5, -5, 5, -5, 5, -5 ],
      target: 10
    },
    expected: [-5, 5]
  },
  {
    input: {
      dishes: [ 5, -5, 5, -5, 5, -5 ],
      target: 0
    },
    expected: [-5, 5]
  },
  {
    input: {
      dishes: [ 3, 5, 7, 2, 6, 8, 1 ],
      target: 10
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ -3, -5, 1, 7 ],
      target: 8
    },
    expected: [-3, 7]
  },
  {
    input: {
      dishes: [ -3, -5, 1, 7 ],
      target: 0
    },
    expected: [-3, 1]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: -5
    },
    expected: [-7, 2]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: -7
    },
    expected: [-25, 12]
  },
  {
    input: {
      dishes: [ 2, 4, -4, -7, 12, 100, -25 ],
      target: -1
    },
    expected: [-4, 2]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: -20
    },
    expected: [-25, 5]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: 5
    },
    expected: [-7, 12]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: 7
    },
    expected: [-7, 12]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: 1
    },
    expected: [-4, 5]
  },
  {
    input: {
      dishes: [ 2, 5, -4, -7, 12, 100, -25 ],
      target: 20
    },
    expected: [-4, 12]
  },
  {
    input: {
      dishes: [ -5, -4, -3, -2, -1, 1, 2, 3, 4, 5 ],
      target: 6
    },
    expected: [-1, 5]
  },
  {
    input: {
      dishes: [ -5, -4, -3, -2, -1, 1, 2, 3, 4, 5 ],
      target: -6
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52 ],
      target: 12
    },
    expected: [-90, 102]
  },
  {
    input: {
      dishes: [ 17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52 ],
      target: 11
    },
    expected: [-102, 102]
  },
  {
    input: {
      dishes: [ 17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52 ],
      target: -100
    },
    expected: [0, 0]
  },
  {
    input: {
      dishes: [ 17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52 ],
      target: -28
    },
    expected: [-90, 53]
  },
  {
    input: {
      dishes: [ -12, 13, 100, -53, 540, -538, 53, 76, 32, -63 ],
      target: 0
    },
    expected: [-53, 53]
  },
  {
    input: {
      dishes: [ -12, 13, 100, -53, 540, -538, 53, 76, 32, -63 ],
      target: -34
    },
    expected: [-53, 13]
  },
  {
    input: {
      dishes: [ -12, 13, 100, -53, 540, -538, 53, 76, 32, -63 ],
      target: -15
    },
    expected: [-53, 32]
  },
  {
    input: {
      dishes: [ -12, 13, 100, -53, 540, -538, 53, 76, 32, -63 ],
      target: 42
    },
    expected: [-12, 53]
  },
];
