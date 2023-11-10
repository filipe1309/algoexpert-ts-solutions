export default [
 {   input: {
      "target": 21,
      "startingHand": 16
    },
    expected: 0.5
  },
  {
    input: {
      "target": 21,
      "startingHand": 21
    },
    expected: 0
  },
  {
    input: {
      "target": 21,
      "startingHand": 20
    },
    expected: 0
  },
  {
    input: {
      "target": 21,
      "startingHand": 17
    },
    expected: 0
  },
  {
    input: {
      "target": 21,
      "startingHand": 15
    },
    expected: 0.45
  },
  {
    input: {
      "target": 21,
      "startingHand": 12
    },
    expected: 0.268
  },
  {
    input: {
      "target": 21,
      "startingHand": 5
    },
    expected: 0.295
  },
  {
    input: {
      "target": 21,
      "startingHand": 1
    },
    expected: 0.261
  },
  {
    input: {
      "target": 100,
      "startingHand": 95
    },
    expected: 0.5
  },
  {
    input: {
      "target": 100,
      "startingHand": 90
    },
    expected: 0.195
  },
  // {
  //   input: {
  //     "target": 100,
  //     "startingHand": 20
  //   },
  //   expected: 0.273
  // },
  {
    input: {
      "target": 100,
      "startingHand": 100
    },
    expected: 0
  },
  {
    input: {
      "target": 10,
      "startingHand": 1
    },
    expected: 0.268
  },
  {
    input: {
      "target": 10,
      "startingHand": 3
    },
    expected: 0.395
  },
  {
    input: {
      "target": 30,
      "startingHand": 3
    },
    expected: 0.271
  },
  {
    input: {
      "target": 30,
      "startingHand": 7
    },
    expected: 0.276
  },
  {
    input: {
      "target": 30,
      "startingHand": 15
    },
    expected: 0.314
  },
  {
    input: {
      "target": 30,
      "startingHand": 25
    },
    expected: 0.5
  }
];
