export default [
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": null, "right": "6", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": "7", "right": "8", "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": null, "right": "6", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": "7", "right": "8", "value": 5},
          {"id": "6", "left": "9", "right": "10", "value": 6},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "11", "right": "6", "value": 3},
          {"id": "11", "left": null, "right": null, "value": 11},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": "7", "right": "8", "value": 5},
          {"id": "6", "left": "9", "right": "10", "value": 6},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": null, "value": 2},
          {"id": "3", "left": null, "right": "5", "value": 4},
          {"id": "4", "left": "6", "right": null, "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "7", "value": 2},
          {"id": "3", "left": "8", "right": "5", "value": 3},
          {"id": "4", "left": "6", "right": null, "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": null, "value": 1}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": null, "value": 1},
          {"id": "2", "left": "3", "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": null, "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": "8", "right": "9", "value": 4},
          {"id": "5", "left": "9", "right": "10", "value": 5},
          {"id": "6", "left": "11", "right": "12", "value": 6},
          {"id": "7", "left": "13", "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "11", "left": null, "right": null, "value": 11},
          {"id": "12", "left": null, "right": null, "value": 12},
          {"id": "13", "left": null, "right": null, "value": 13}
        ],
        "root": "1"
      }
    },
    expected: true
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": "8", "right": "9", "value": 4},
          {"id": "5", "left": "9", "right": "10", "value": 5},
          {"id": "6", "left": null, "right": "12", "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "11", "left": null, "right": null, "value": 11},
          {"id": "12", "left": null, "right": "13", "value": 12},
          {"id": "13", "left": null, "right": null, "value": 13}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": null, "value": 1},
          {"id": "2", "left": null, "right": "3", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": null, "value": 1},
          {"id": "2", "left": "4", "right": "3", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 2},
          {"id": "4", "left": null, "right": null, "value": 4}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": "8", "right": null, "value": 4},
          {"id": "5", "left": "12", "right": null, "value": 5},
          {"id": "6", "left": "9", "right": "10", "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": "11", "right": null, "value": 8},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "11", "left": null, "right": null, "value": 11},
          {"id": "12", "left": null, "right": null, "value": 12}
        ],
        "root": "1"
      }
    },
    expected: false
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": "8", "right": null, "value": 4},
          {"id": "5", "left": "12", "right": null, "value": 5},
          {"id": "6", "left": "9", "right": "10", "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "12", "left": null, "right": null, "value": 12}
        ],
        "root": "1"
      }
    },
    expected: true
  }
];
