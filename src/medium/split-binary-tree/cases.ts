export default [
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "0", "left": null, "right": null, "value": 0}
        ],
        "root": "0"
      }
    },
    expected: 0
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
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "2", "left": null, "right": null, "value": 2}
        ],
        "root": "2"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "-2", "left": null, "right": null, "value": -2}
        ],
        "root": "-2"
      }
    },
      expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "2", "left": null, "right": "2-2", "value": 2},
          {"id": "2-2", "left": null, "right": null, "value": 2}
        ],
        "root": "2"
      }
    },
    expected: 2
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": "1-2", "value": 1},
          {"id": "1-2", "left": null, "right": null, "value": 1}
        ],
        "root": "1"
      }
    },
    expected: 1
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: 3
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "4", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "4", "left": null, "right": null, "value": 4}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "1-2", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "1-2", "left": null, "right": "1-3", "value": 1},
          {"id": "1-3", "left": null, "right": null, "value": 1}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "1-2", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "1-2", "left": null, "right": "2-2", "value": 1},
          {"id": "2-2", "left": null, "right": null, "value": 2}
        ],
        "root": "1"
      }
    },
    expected: 3
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "6", "right": "3", "value": 1},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "3", "left": null, "right": "2", "value": 3},
          {"id": "2", "left": null, "right": null, "value": 2}
        ],
        "root": "1"
      }
    },
    expected: 6
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "6", "right": "3", "value": 1},
          {"id": "6", "left": "6-2", "right": null, "value": 6},
          {"id": "3", "left": null, "right": "10", "value": 3},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "6-2", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: 13
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "6", "right": "3", "value": 1},
          {"id": "6", "left": "6-2", "right": null, "value": 6},
          {"id": "3", "left": null, "right": "8", "value": 3},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "6-2", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: 12
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "6", "right": "3", "value": 1},
          {"id": "6", "left": "6-2", "right": null, "value": 6},
          {"id": "3", "left": null, "right": "4", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "6-2", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": null, "right": "7", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "1"
      }
    },
    expected: 11
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "2", "value": 1},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "2", "left": "15", "right": "10", "value": 2},
          {"id": "15", "left": null, "right": null, "value": 15},
          {"id": "10", "left": "100", "right": "200", "value": 10},
          {"id": "100", "left": null, "right": null, "value": 100},
          {"id": "200", "left": null, "right": null, "value": 200}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "20", "value": 1},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "15", "value": 10},
          {"id": "35", "left": null, "right": null, "value": 35},
          {"id": "15", "left": null, "right": null, "value": 15}
        ],
        "root": "1"
      }
    },
    expected: 60
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "20", "value": 1},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "25", "value": 10},
          {"id": "35", "left": null, "right": null, "value": 35},
          {"id": "25", "left": null, "right": null, "value": 25}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "20", "value": 1},
          {"id": "9", "left": "5", "right": "2", "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "25", "value": 10},
          {"id": "35", "left": null, "right": null, "value": 35},
          {"id": "25", "left": null, "right": null, "value": 25},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "2", "left": "3", "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: 70
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "20", "value": 1},
          {"id": "9", "left": "5", "right": "2", "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "25", "value": 10},
          {"id": "35", "left": "3", "right": null, "value": 35},
          {"id": "25", "left": null, "right": null, "value": 25},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "9", "right": "20", "value": 1},
          {"id": "9", "left": "5", "right": "2", "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "25", "value": 10},
          {"id": "35", "left": null, "right": null, "value": 35},
          {"id": "25", "left": null, "right": null, "value": 25},
          {"id": "5", "left": "102", "right": null, "value": 5},
          {"id": "2", "left": "3", "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "102", "left": null, "right": null, "value": 102}
        ],
        "root": "1"
      }
    },
    expected: 121
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "20", "right": "9", "value": 1},
          {"id": "9", "left": "5", "right": "2", "value": 9},
          {"id": "20", "left": "30", "right": "10", "value": 20},
          {"id": "30", "left": null, "right": null, "value": 30},
          {"id": "10", "left": "35", "right": "25", "value": 10},
          {"id": "35", "left": null, "right": null, "value": 35},
          {"id": "25", "left": null, "right": null, "value": 25},
          {"id": "5", "left": "102", "right": null, "value": 5},
          {"id": "2", "left": "3", "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "102", "left": null, "right": null, "value": 102}
        ],
        "root": "1"
      }
    },
    expected: 121
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "right": "3", "value": 2},
          {"id": "3", "left": null, "right": "4", "value": 3},
          {"id": "4", "left": null, "right": "5", "value": 4},
          {"id": "5", "left": null, "right": "6", "value": 5},
          {"id": "6", "left": null, "right": "7", "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "right": "3", "value": 2},
          {"id": "3", "left": null, "right": "4", "value": 3},
          {"id": "4", "left": null, "right": "5", "value": 4},
          {"id": "5", "left": null, "right": "6", "value": 5},
          {"id": "6", "left": null, "right": "9", "value": 6},
          {"id": "9", "left": null, "right": null, "value": 9}
        ],
        "root": "1"
      }
  },
    expected: 15
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "-2", "left": null, "right": "-2-2", "value": -2},
          {"id": "-2-2", "left": null, "right": null, "value": -2}
        ],
        "root": "-2"
      }
    },
    expected: -2
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "-2", "left": null, "right": "0", "value": -2},
          {"id": "0", "left": null, "right": null, "value": 0}
        ],
        "root": "-2"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "1-1", "right": "2", "value": 1},
          {"id": "2", "left": null, "right": "-5", "value": 2},
          {"id": "1-1", "left": "12", "right": null, "value": 1},
          {"id": "12", "left": null, "right": "-21", "value": 12},
          {"id": "-21", "left": null, "right": null, "value": -21},
          {"id": "-5", "left": null, "right": null, "value": -5}
        ],
        "root": "1"
      }
    },
    expected: -5
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "right": "3", "value": 2},
          {"id": "3", "left": null, "right": "-4", "value": 3},
          {"id": "-4", "left": null, "right": "5", "value": -4},
          {"id": "5", "left": null, "right": "6", "value": 5},
          {"id": "6", "left": null, "right": "9", "value": 6},
          {"id": "9", "left": null, "right": null, "value": 9}
        ],
        "root": "1"
      }
    },
    expected: 0
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "right": "3", "value": 2},
          {"id": "3", "left": null, "right": "-4", "value": 3},
          {"id": "-4", "left": null, "right": "9", "value": -4},
          {"id": "9", "left": null, "right": "5", "value": 9},
          {"id": "5", "left": null, "right": "6", "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: 11
  },
  {
    input: {
      "tree": {
        "nodes": [
          {"id": "1", "left": "-20", "right": "9", "value": 1},
          {"id": "9", "left": "-13", "right": "4", "value": 9},
          {"id": "-20", "left": "-30", "right": "17", "value": -20},
          {"id": "-30", "left": "8", "right": null, "value": -30},
          {"id": "17", "left": "-26", "right": "-17", "value": 17},
          {"id": "-26", "left": "19", "right": null, "value": -26},
          {"id": "-17", "left": null, "right": null, "value": -17},
          {"id": "-13", "left": "42", "right": null, "value": -13},
          {"id": "4", "left": "3", "right": "-11", "value": 4},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "42", "left": null, "right": null, "value": 42},
          {"id": "19", "left": null, "right": null, "value": 19},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "-11", "left": null, "right": null, "value": -11}
        ],
        "root": "1"
      }
    },
    expected: -7
  }
];
