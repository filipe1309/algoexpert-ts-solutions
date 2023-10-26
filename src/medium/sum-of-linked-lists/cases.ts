export default [
  {
    input: {
      "linkedListOne": {
        "head": "2",
        "nodes": [
          {"id": "2", "next": "4", "value": 2},
          {"id": "4", "next": "7", "value": 4},
          {"id": "7", "next": "1", "value": 7},
          {"id": "1", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "9",
        "nodes": [
          {"id": "9", "next": "4", "value": 9},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": null, "value": 5}
        ]
      }
    },
    expected: {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "9", "value": 1},
        {"id": "9", "next": "2", "value": 9},
        {"id": "2", "next": "2-2", "value": 2},
        {"id": "2-2", "next": null, "value": 2}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "2",
        "nodes": [
          {"id": "2", "next": null, "value": 2}
        ]
      },
      "linkedListTwo": {
        "head": "9",
        "nodes": [
          {"id": "9", "next": null, "value": 9}
        ]
      }
    },
    expected: {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": null, "value": 1}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "0-2", "value": 0},
          {"id": "0-2", "next": "0-3", "value": 0},
          {"id": "0-3", "next": "5", "value": 0},
          {"id": "5", "next": null, "value": 5}
        ]
      },
      "linkedListTwo": {
        "head": "9",
        "nodes": [
          {"id": "9", "next": null, "value": 9}
        ]
      }
    },
    expected: {
      "head": "9",
      "nodes": [
        {"id": "9", "next": "0", "value": 9},
        {"id": "0", "next": "0-2", "value": 0},
        {"id": "0-2", "next": "5", "value": 0},
        {"id": "5", "next": null, "value": 5}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": "1-2", "value": 1},
          {"id": "1-2", "next": "1-3", "value": 1},
          {"id": "1-3", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "9",
        "nodes": [
          {"id": "9", "next": "9-2", "value": 9},
          {"id": "9-2", "next": "9-3", "value": 9},
          {"id": "9-3", "next": null, "value": 9}
        ]
      }
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": "1-3", "value": 1},
        {"id": "1-3", "next": null, "value": 1}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": null, "value": 3}
        ]
      },
      "linkedListTwo": {
        "head": "6",
        "nodes": [
          {"id": "6", "next": "7", "value": 6},
          {"id": "7", "next": "9", "value": 7},
          {"id": "9", "next": "1", "value": 9},
          {"id": "1", "next": "8", "value": 1},
          {"id": "8", "next": null, "value": 8}
        ]
      }
    },
    expected: {
      "head": "7",
      "nodes": [
        {"id": "7", "next": "9", "value": 7},
        {"id": "9", "next": "2", "value": 9},
        {"id": "2", "next": "2-2", "value": 2},
        {"id": "2-2", "next": "8", "value": 2},
        {"id": "8", "next": null, "value": 8}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": null, "value": 0}
        ]
      },
      "linkedListTwo": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": null, "value": 0}
        ]
      }
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": null, "value": 0}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": null, "value": 0}
        ]
      },
      "linkedListTwo": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "0-2", "value": 0},
          {"id": "0-2", "next": "0-3", "value": 0},
          {"id": "0-3", "next": "0-4", "value": 0},
          {"id": "0-4", "next": "0-5", "value": 0},
          {"id": "0-5", "next": "8", "value": 0},
          {"id": "8", "next": null, "value": 8}
        ]
      }
    },
    expected: {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "0-2", "value": 0},
        {"id": "0-2", "next": "0-3", "value": 0},
        {"id": "0-3", "next": "0-4", "value": 0},
        {"id": "0-4", "next": "0-5", "value": 0},
        {"id": "0-5", "next": "8", "value": 0},
        {"id": "8", "next": null, "value": 8}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "4",
        "nodes": [
          {"id": "4", "next": "6", "value": 4},
          {"id": "6", "next": "9", "value": 6},
          {"id": "9", "next": "3", "value": 9},
          {"id": "3", "next": "1", "value": 3},
          {"id": "1", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "0",
        "nodes": [
          {"id": "0", "next": "0-2", "value": 0},
          {"id": "0-2", "next": "0-3", "value": 0},
          {"id": "0-3", "next": "0-4", "value": 0},
          {"id": "0-4", "next": "2", "value": 0},
          {"id": "2", "next": "7", "value": 2},
          {"id": "7", "next": null, "value": 7}
        ]
      }
    },
    expected: {
      "head": "4",
      "nodes": [
        {"id": "4", "next": "6", "value": 4},
        {"id": "6", "next": "9", "value": 6},
        {"id": "9", "next": "3", "value": 9},
        {"id": "3", "next": "3-2", "value": 3},
        {"id": "3-2", "next": "7", "value": 3},
        {"id": "7", "next": null, "value": 7}
      ]
    }
  }
];
