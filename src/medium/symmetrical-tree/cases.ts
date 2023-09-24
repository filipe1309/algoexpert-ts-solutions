export default [
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
          {"id": "2", "left": null, "right": null, "value": 2}
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
          {"id": "1", "left": null, "right": "2", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2}
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
          {"id": "2", "left": null, "right": null, "value": 2},
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": null, "right": null, "value": 2},
          {"id": "2-2", "left": null, "right": null, "value": 2}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": null, "value": 2},
          {"id": "2-2", "left": null, "right": null, "value": 2},
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "3-2", "value": 2},
          {"id": "2-2", "left": null, "right": null, "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "3-2", "value": 2},
          {"id": "2-2", "left": "3-3", "right": "3-4", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "3-3", "left": null, "right": null, "value": 3},
          {"id": "3-4", "left": null, "right": null, "value": 3}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "4", "value": 2},
          {"id": "2-2", "left": "4-2", "right": "3-2", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "4-2", "left": null, "right": null, "value": 4}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "4", "value": 2},
          {"id": "2-2", "left": "3-2", "right": "4-2", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "4-2", "left": null, "right": null, "value": 4}
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
          {"id": "1", "left": "2", "right": "5", "value": 1},
          {"id": "2", "left": "3", "right": "4", "value": 2},
          {"id": "5", "left": "4-2", "right": "3-2", "value": 5},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "4-2", "left": null, "right": null, "value": 4}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "4", "value": 2},
          {"id": "2-2", "left": "4-2", "right": "3-2", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "4", "left": null, "right": null, "value": 4},
          {"id": "4-2", "left": null, "right": "5", "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5}
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
          {"id": "1", "left": "2", "right": "2-2", "value": 1},
          {"id": "2", "left": "3", "right": "4", "value": 2},
          {"id": "2-2", "left": "4-2", "right": "3-2", "value": 2},
          {"id": "3", "left": null, "right": null, "value": 3},
          {"id": "3-2", "left": null, "right": null, "value": 3},
          {"id": "4", "left": "5-2", "right": null, "value": 4},
          {"id": "4-2", "left": null, "right": "5", "value": 4},
          {"id": "5", "left": null, "right": null, "value": 5},
          {"id": "5-2", "left": null, "right": null, "value": 5}
        ],
        "root": "1"
      }
    },
    expected: true
  },
];
