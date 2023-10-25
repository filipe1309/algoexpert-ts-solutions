export default [
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 4
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "7", "value": 5},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 1
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": null, "value": 8}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 2
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "9", "value": 7},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 3
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "8", "value": 6},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 5
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "6", "value": 4},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 6
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "5", "value": 3},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 7
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "4", "value": 2},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 8
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "3", "value": 1},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 9
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "2", "value": 0},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedList": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "1", "value": 0},
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "8", "value": 7},
          {"id": "8", "next": "9", "value": 8},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "k": 10
    },
    expected: {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  }
];
