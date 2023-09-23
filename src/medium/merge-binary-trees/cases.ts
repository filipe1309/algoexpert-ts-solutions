export default [
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "7"
      },
      "tree2": {
        "nodes": [
          {"id": "2", "left": "3", "right": "6", "value": 2},
          {"id": "3", "left": null, "right": "4", "value": 3},
          {"id": "6", "left": null, "right": "7", "value": 6},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "2"
      }
    },
    expected: {
      "nodes": [
        {"id": "9", "left": "3", "right": "6", "value": 9},
        {"id": "6", "left": null, "right": "7", "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "3", "left": null, "right": "4", "value": 3},
        {"id": "4", "left": null, "right": null, "value": 4}
      ],
      "root": "9"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "3", "right": "2", "value": 1},
          {"id": "3", "left": "5", "right": null, "value": 3},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "2", "left": null, "right": null, "value": 2}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "2", "left": "3", "right": "6", "value": 2},
          {"id": "3", "left": null, "right": "4", "value": 3},
          {"id": "6", "left": null, "right": "7", "value": 6},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "2"
      }
    },
    expected: {
      "nodes": [
        {"id": "3", "left": "6", "right": "8", "value": 3},
        {"id": "8", "left": null, "right": "7", "value": 8},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "6", "left": "5", "right": "4", "value": 6},
        {"id": "4", "left": null, "right": null, "value": 4},
        {"id": "5", "left": null, "right": null, "value": 5}
      ],
      "root": "3"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "3", "right": "2", "value": 1},
          {"id": "3", "left": "7", "right": "4", "value": 3},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "2", "left": null, "right": null, "value": 2}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "1", "left": "5", "right": "9", "value": 1},
          {"id": "5", "left": "2", "right": null, "value": 5},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "9", "left": "7", "right": "6", "value": 9},
          {"id": "7", "left": null, "right": null, "value": 7},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "1"
      }
    },
    expected: {
      "nodes": [
        {"id": "2", "left": "8", "right": "11", "value": 2},
        {"id": "11", "left": "7", "right": "6", "value": 11},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": "9", "right": "4", "value": 8},
        {"id": "4", "left": null, "right": null, "value": 4},
        {"id": "9", "left": null, "right": null, "value": 9}
      ],
      "root": "2"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "4", "left": "5", "right": "6", "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "4"
      }
    },
    expected: {
      "nodes": [
        {"id": "5", "left": "7", "right": "9", "value": 5},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "7", "left": null, "right": null, "value": 7}
      ],
      "root": "5"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "4", "left": "5", "right": "6", "value": 4},
          {"id": "5", "left": "1", "right": "8", "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "1", "left": null, "right": null, "value": 1},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "4"
      }
    },
    expected: {
      "nodes": [
        {"id": "5", "left": "7", "right": "9", "value": 5},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "7", "left": "1", "right": "8", "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "1", "left": null, "right": null, "value": 1}
      ],
      "root": "5"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "4", "left": "5", "right": "6", "value": 4},
          {"id": "5", "left": "1", "right": "8", "value": 5},
          {"id": "6", "left": "10", "right": "15", "value": 6},
          {"id": "1", "left": null, "right": null, "value": 1},
          {"id": "8", "left": null, "right": null, "value": 8},
          {"id": "10", "left": null, "right": null, "value": 10},
          {"id": "15", "left": null, "right": null, "value": 15}
        ],
        "root": "4"
      }
    },
    expected: {
      "nodes": [
        {"id": "5", "left": "7", "right": "9", "value": 5},
        {"id": "9", "left": "10", "right": "15", "value": 9},
        {"id": "15", "left": null, "right": null, "value": 15},
        {"id": "10", "left": null, "right": null, "value": 10},
        {"id": "7", "left": "1", "right": "8", "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "1", "left": null, "right": null, "value": 1}
      ],
      "root": "5"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "5", "right": "8", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "4", "left": "5", "right": "6", "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "4"
      }
    },
    expected: {
      "nodes": [
        {"id": "5", "left": "7", "right": "9", "value": 5},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "7", "left": "5-2", "right": "8", "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "5-2", "left": null, "right": null, "value": 5}
      ],
      "root": "5"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "2", "left": "4", "right": "1", "value": 2},
          {"id": "4", "left": "6", "right": null, "value": 4},
          {"id": "1", "left": null, "right": null, "value": 1},
          {"id": "6", "left": null, "right": null, "value": 6}
        ],
        "root": "2"
      },
      "tree2": {
        "nodes": [
          {"id": "3", "left": "1", "right": "6", "value": 3},
          {"id": "1", "left": null, "right": "9", "value": 1},
          {"id": "6", "left": null, "right": "8", "value": 6},
          {"id": "9", "left": null, "right": null, "value": 9},
          {"id": "8", "left": null, "right": null, "value": 8}
        ],
        "root": "3"
      }
    },
    expected: {
      "nodes": [
        {"id": "5", "left": "5-2", "right": "7", "value": 5},
        {"id": "7", "left": null, "right": "8", "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "5-2", "left": "6", "right": "9", "value": 5},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "6", "left": null, "right": null, "value": 6}
      ],
      "root": "5"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "1", "left": "2", "right": "3", "value": 1},
          {"id": "2", "left": "4", "right": "5", "value": 2},
          {"id": "3", "left": "6", "right": "7", "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "6", "left": null, "right": null, "value": 6},
          {"id": "7", "left": null, "right": null, "value": 7}
        ],
        "root": "1"
      }
    },
    expected: {
      "nodes": [
        {"id": "2", "left": "4", "right": "6", "value": 2},
        {"id": "6", "left": "12", "right": "14", "value": 6},
        {"id": "14", "left": null, "right": null, "value": 14},
        {"id": "12", "left": null, "right": null, "value": 12},
        {"id": "4", "left": "8", "right": "10", "value": 4},
        {"id": "10", "left": null, "right": null, "value": 10},
        {"id": "8", "left": null, "right": null, "value": 8}
      ],
      "root": "2"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": null, "right": null, "value": 1}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "1", "left": null, "right": null, "value": 1}
        ],
        "root": "1"
      }
    },
    expected: {
      "nodes": [
        {"id": "2", "left": null, "right": null, "value": 2}
      ],
      "root": "2"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "3", "right": null, "value": 1},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "1", "left": null, "right": "4", "value": 1},
          {"id": "4", "left": null, "right": null, "value": 4}
        ],
        "root": "1"
      }
    },
    expected: {
      "nodes": [
        {"id": "2", "left": "3", "right": "4", "value": 2},
        {"id": "4", "left": null, "right": null, "value": 4},
        {"id": "3", "left": null, "right": null, "value": 3}
      ],
      "root": "2"
    }
  },
  {
    input: {
      "tree1": {
        "nodes": [
          {"id": "1", "left": "4", "right": null, "value": 1},
          {"id": "4", "left": null, "right": null, "value": 4}
        ],
        "root": "1"
      },
      "tree2": {
        "nodes": [
          {"id": "1", "left": null, "right": "3", "value": 1},
          {"id": "3", "left": null, "right": null, "value": 3}
        ],
        "root": "1"
      }
    },
    expected: {
      "nodes": [
        {"id": "2", "left": "4", "right": "3", "value": 2},
        {"id": "3", "left": null, "right": null, "value": 3},
        {"id": "4", "left": null, "right": null, "value": 4}
      ],
      "root": "2"
    }
  }
];
