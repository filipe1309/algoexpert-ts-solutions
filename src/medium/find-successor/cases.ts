export default [
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
          {"id": "2", "left": "4", "parent": "1", "right": "5", "value": 2},
          {"id": "3", "left": null, "parent": "1", "right": null, "value": 3},
          {"id": "4", "left": "6", "parent": "2", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "2", "right": null, "value": 5},
          {"id": "6", "left": null, "parent": "4", "right": null, "value": 6}
        ],
        "root": "1"
      },
      "node": "5"
    },
    expected: 1
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
          {"id": "2", "left": "4", "parent": "1", "right": "5", "value": 2},
          {"id": "3", "left": null, "parent": "1", "right": null, "value": 3},
          {"id": "4", "left": null, "parent": "2", "right": null, "value": 4},
          {"id": "5", "left": "6", "parent": "2", "right": "7", "value": 5},
          {"id": "6", "left": null, "parent": "5", "right": null, "value": 6},
          {"id": "7", "left": "8", "parent": "5", "right": null, "value": 7},
          {"id": "8", "left": null, "parent": "7", "right": null, "value": 8}
        ],
        "root": "1"
      },
      "node": "5"
    },
    expected: 8
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
          {"id": "2", "left": "4", "parent": "1", "right": "5", "value": 2},
          {"id": "3", "left": "6", "parent": "1", "right": "7", "value": 3},
          {"id": "4", "left": null, "parent": "2", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "2", "right": null, "value": 5},
          {"id": "6", "left": null, "parent": "3", "right": null, "value": 6},
          {"id": "7", "left": null, "parent": "3", "right": null, "value": 7}
        ],
        "root": "1"
      },
      "node": "6"
    },
    expected: 3
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "parent": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "parent": "1", "right": null, "value": 2}
        ],
        "root": "1"
      },
      "node": "2"
    },
    expected: null
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
          {"id": "2", "left": null, "parent": "1", "right": null, "value": 2},
          {"id": "3", "left": "4", "parent": "1", "right": null, "value": 3},
          {"id": "4", "left": "5", "parent": "3", "right": null, "value": 4},
          {"id": "5", "left": "6", "parent": "4", "right": null, "value": 5},
          {"id": "6", "left": "7", "parent": "5", "right": null, "value": 6},
          {"id": "7", "left": null, "parent": "6", "right": null, "value": 7}
        ],
        "root": "1"
      },
    "node": "1"
    },
    expected: 7
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": null, "value": 1},
          {"id": "2", "left": "3", "parent": "1", "right": null, "value": 2},
          {"id": "3", "left": "4", "parent": "2", "right": null, "value": 3},
          {"id": "4", "left": "5", "parent": "3", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "4", "right": null, "value": 5}
        ],
        "root": "1"
      },
      "node": "3"
    },
    expected: 2
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": null, "value": 1},
          {"id": "2", "left": "3", "parent": "1", "right": "6", "value": 2},
          {"id": "3", "left": "4", "parent": "2", "right": null, "value": 3},
          {"id": "4", "left": "5", "parent": "3", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "4", "right": null, "value": 5},
          {"id": "6", "left": "7", "parent": "2", "right": "8", "value": 6},
          {"id": "7", "left": null, "parent": "6", "right": null, "value": 7},
          {"id": "8", "left": null, "parent": "6", "right": null, "value": 8}
        ],
        "root": "1"
      },
      "node": "2"
    },
    expected: 7
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "parent": null, "right": null, "value": 1}
        ],
        "root": "1"
      },
      "node": "1"
    },
    expected: null
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "parent": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "parent": "1", "right": null, "value": 2}
        ],
        "root": "1"
      },
      "node": "1"
    },
    expected: 2
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "5", "value": 1},
          {"id": "2", "left": null, "parent": "1", "right": "3", "value": 2},
          {"id": "3", "left": null, "parent": "2", "right": "4", "value": 3},
          {"id": "4", "left": null, "parent": "3", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "1", "right": "6", "value": 5},
          {"id": "6", "left": "7", "parent": "5", "right": "8", "value": 6},
          {"id": "7", "left": null, "parent": "6", "right": null, "value": 7},
          {"id": "8", "left": null, "parent": "6", "right": null, "value": 8}
        ],
        "root": "1"
      },
      "node": "1"
    },
    expected: 5
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "5", "value": 1},
          {"id": "2", "left": null, "parent": "1", "right": "3", "value": 2},
          {"id": "3", "left": null, "parent": "2", "right": "4", "value": 3},
          {"id": "4", "left": null, "parent": "3", "right": null, "value": 4},
          {"id": "5", "left": "9", "parent": "1", "right": "6", "value": 5},
          {"id": "6", "left": "7", "parent": "5", "right": "8", "value": 6},
          {"id": "7", "left": null, "parent": "6", "right": null, "value": 7},
          {"id": "8", "left": null, "parent": "6", "right": null, "value": 8},
          {"id": "9", "left": "10", "parent": "5", "right": null, "value": 9},
          {"id": "10", "left": "11", "parent": "9", "right": null, "value": 10},
          {"id": "11", "left": null, "parent": "10", "right": null, "value": 11}
        ],
        "root": "1"
      },
      "node": "1"
    },
    expected: 11
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
          {"id": "2", "left": "4", "parent": "1", "right": "5", "value": 2},
          {"id": "3", "left": null, "parent": "1", "right": "7", "value": 3},
          {"id": "4", "left": "6", "parent": "2", "right": null, "value": 4},
          {"id": "5", "left": null, "parent": "2", "right": null, "value": 5},
          {"id": "6", "left": null, "parent": "4", "right": null, "value": 6},
          {"id": "7", "left": null, "parent": "3", "right": "8", "value": 7},
          {"id": "8", "left": null, "parent": "7", "right": null, "value": 8}
        ],
        "root": "1"
      },
      "node": "1"
    },
    expected: 3
  }
];
