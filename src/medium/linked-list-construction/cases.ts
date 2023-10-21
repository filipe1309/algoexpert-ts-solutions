export default [
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "3-2", "next": null, "prev": null, "value": 3},
        {"id": "3-3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4},
        {"id": "5", "next": null, "prev": null, "value": 5},
        {"id": "6", "next": null, "prev": null, "value": 6}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["5"],
          "method": "setHead"
        },
        {
          "arguments": ["4"],
          "method": "setHead"
        },
        {
          "arguments": ["3"],
          "method": "setHead"
        },
        {
          "arguments": ["2"],
          "method": "setHead"
        },
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["4"],
          "method": "setHead"
        },
        {
          "arguments": ["6"],
          "method": "setTail"
        },
        {
          "arguments": ["6", "3"],
          "method": "insertBefore"
        },
        {
          "arguments": ["6", "3-2"],
          "method": "insertAfter"
        },
        {
          "arguments": [1, "3-3"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [3],
          "method": "removeNodesWithValue"
        },
        {
          "arguments": ["2"],
          "method": "remove"
        },
        {
          "arguments": [5],
          "method": "containsNodeWithValue"
        }
      ]
    },
    expected: [
      {
        "arguments": ["5"],
        "linkedList": {
          "head": "5",
          "nodes": [
            {"id": "5", "next": null, "prev": null, "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["4"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "5", "prev": null, "value": 4},
            {"id": "5", "next": null, "prev": "4", "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["3"],
        "linkedList": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "4", "prev": null, "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": null, "prev": "4", "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["2"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": null, "prev": "4", "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": null, "prev": "4", "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["4"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "5", "prev": "2", "value": 3},
            {"id": "5", "next": null, "prev": "3", "value": 5}
          ],
          "tail": "5"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["6"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "5", "prev": "2", "value": 3},
            {"id": "5", "next": "6", "prev": "3", "value": 5},
            {"id": "6", "next": null, "prev": "5", "value": 6}
          ],
          "tail": "6"
        },
        "method": "setTail",
        "output": null
      },
      {
        "arguments": ["6", "3"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "5", "prev": "1", "value": 2},
            {"id": "5", "next": "3", "prev": "2", "value": 5},
            {"id": "3", "next": "6", "prev": "5", "value": 3},
            {"id": "6", "next": null, "prev": "3", "value": 6}
          ],
          "tail": "6"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["6", "3-2"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "5", "prev": "1", "value": 2},
            {"id": "5", "next": "3", "prev": "2", "value": 5},
            {"id": "3", "next": "6", "prev": "5", "value": 3},
            {"id": "6", "next": "3-2", "prev": "3", "value": 6},
            {"id": "3-2", "next": null, "prev": "6", "value": 3}
          ],
          "tail": "3-2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": [1, "3-3"],
        "linkedList": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "4", "prev": null, "value": 3},
            {"id": "4", "next": "1", "prev": "3", "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "5", "prev": "1", "value": 2},
            {"id": "5", "next": "3-2", "prev": "2", "value": 5},
            {"id": "3-2", "next": "6", "prev": "5", "value": 3},
            {"id": "6", "next": "3-3", "prev": "3-2", "value": 6},
            {"id": "3-3", "next": null, "prev": "6", "value": 3}
          ],
          "tail": "3-3"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [3],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "2", "prev": "4", "value": 1},
            {"id": "2", "next": "5", "prev": "1", "value": 2},
            {"id": "5", "next": "6", "prev": "2", "value": 5},
            {"id": "6", "next": null, "prev": "5", "value": 6}
          ],
          "tail": "6"
        },
        "method": "removeNodesWithValue",
        "output": null
      },
      {
        "arguments": ["2"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "5", "prev": "4", "value": 1},
            {"id": "5", "next": "6", "prev": "1", "value": 5},
            {"id": "6", "next": null, "prev": "5", "value": 6}
          ],
          "tail": "6"
        },
        "method": "remove",
        "output": null
      },
      {
        "arguments": [5],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "1", "prev": null, "value": 4},
            {"id": "1", "next": "5", "prev": "4", "value": 1},
            {"id": "5", "next": "6", "prev": "1", "value": 5},
            {"id": "6", "next": null, "prev": "5", "value": 6}
          ],
          "tail": "6"
        },
        "method": "containsNodeWithValue",
        "output": true
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setTail"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setTail",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": [1, "1"],
          "method": "insertAtPosition"
        }
      ]
    },
    expected: [
      {
        "arguments": [1, "1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertAtPosition",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["2"],
          "method": "setTail"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "setTail",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["2"],
          "method": "setHead"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["2"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertBefore"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setTail"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertBefore"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertBefore"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertBefore"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setTail",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "2", "prev": null, "value": 3},
            {"id": "2", "next": "1", "prev": "3", "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "3", "prev": null, "value": 4},
            {"id": "3", "next": "2", "prev": "4", "value": 3},
            {"id": "2", "next": "1", "prev": "3", "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1"],
          "method": "setTail"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "1", "prev": "3", "value": 4},
            {"id": "1", "next": null, "prev": "4", "value": 1}
          ],
          "tail": "1"
        },
        "method": "setTail",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setTail"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertBefore"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertBefore"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertBefore"
        },
        {
          "arguments": ["1"],
          "method": "setHead"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setTail",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "2", "prev": null, "value": 3},
            {"id": "2", "next": "1", "prev": "3", "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "3", "prev": null, "value": 4},
            {"id": "3", "next": "2", "prev": "4", "value": 3},
            {"id": "2", "next": "1", "prev": "3", "value": 2},
            {"id": "1", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1"
        },
        "method": "insertBefore",
        "output": null
      },
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "4", "prev": null, "value": 1},
            {"id": "4", "next": "3", "prev": "1", "value": 4},
            {"id": "3", "next": "2", "prev": "4", "value": 3},
            {"id": "2", "next": null, "prev": "3", "value": 2}
          ],
          "tail": "2"
        },
        "method": "setHead",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "1"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertBefore"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": "3", "prev": "2", "value": 1},
            {"id": "3", "next": "4", "prev": "1", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": "4", "prev": "2", "value": 1},
            {"id": "4", "next": "3", "prev": "1", "value": 4},
            {"id": "3", "next": null, "prev": "4", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertBefore",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4},
        {"id": "5", "next": null, "prev": null, "value": 5},
        {"id": "6", "next": null, "prev": null, "value": 6},
        {"id": "7", "next": null, "prev": null, "value": 7}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["4", "5"],
          "method": "insertAfter"
        },
        {
          "arguments": ["5", "6"],
          "method": "insertAfter"
        },
        {
          "arguments": ["6", "7"],
          "method": "insertAfter"
        },
        {
          "arguments": [7, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [1, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [2, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [3, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [4, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [5, "1"],
          "method": "insertAtPosition"
        },
        {
          "arguments": [6, "1"],
          "method": "insertAtPosition"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["4", "5"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": null, "prev": "4", "value": 5}
          ],
          "tail": "5"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["5", "6"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": null, "prev": "5", "value": 6}
          ],
          "tail": "6"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["6", "7"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": [7, "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "1", "prev": "5", "value": 6},
            {"id": "1", "next": "7", "prev": "6", "value": 1},
            {"id": "7", "next": null, "prev": "1", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [1, "1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [2, "1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [3, "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "prev": null, "value": 2},
            {"id": "1", "next": "3", "prev": "2", "value": 1},
            {"id": "3", "next": "4", "prev": "1", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [4, "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "1", "prev": "2", "value": 3},
            {"id": "1", "next": "4", "prev": "3", "value": 1},
            {"id": "4", "next": "5", "prev": "1", "value": 4},
            {"id": "5", "next": "6", "prev": "4", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [5, "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "1", "prev": "3", "value": 4},
            {"id": "1", "next": "5", "prev": "4", "value": 1},
            {"id": "5", "next": "6", "prev": "1", "value": 5},
            {"id": "6", "next": "7", "prev": "5", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      },
      {
        "arguments": [6, "1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": "5", "prev": "3", "value": 4},
            {"id": "5", "next": "1", "prev": "4", "value": 5},
            {"id": "1", "next": "6", "prev": "5", "value": 1},
            {"id": "6", "next": "7", "prev": "1", "value": 6},
            {"id": "7", "next": null, "prev": "6", "value": 7}
          ],
          "tail": "7"
        },
        "method": "insertAtPosition",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1"],
          "method": "remove"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1"],
        "linkedList": {
          "head": null,
          "nodes": [],
          "tail": null
        },
        "method": "remove",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": [1],
          "method": "removeNodesWithValue"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": [1],
        "linkedList": {
          "head": null,
          "nodes": [],
          "tail": null
        },
        "method": "removeNodesWithValue",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1"],
          "method": "remove"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "remove",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["4"],
          "method": "remove"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "remove",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2"],
          "method": "remove"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "3", "prev": null, "value": 1},
            {"id": "3", "next": "4", "prev": "1", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "remove",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "1-2", "next": null, "prev": null, "value": 1},
        {"id": "1-3", "next": null, "prev": null, "value": 1},
        {"id": "1-4", "next": null, "prev": null, "value": 1}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "1-2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1-2", "1-3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1-3", "1-4"],
          "method": "insertAfter"
        },
        {
          "arguments": [1],
          "method": "removeNodesWithValue"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "1-2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "1-2", "prev": null, "value": 1},
            {"id": "1-2", "next": null, "prev": "1", "value": 1}
          ],
          "tail": "1-2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1-2", "1-3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "1-2", "prev": null, "value": 1},
            {"id": "1-2", "next": "1-3", "prev": "1", "value": 1},
            {"id": "1-3", "next": null, "prev": "1-2", "value": 1}
          ],
          "tail": "1-3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1-3", "1-4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "1-2", "prev": null, "value": 1},
            {"id": "1-2", "next": "1-3", "prev": "1", "value": 1},
            {"id": "1-3", "next": "1-4", "prev": "1-2", "value": 1},
            {"id": "1-4", "next": null, "prev": "1-3", "value": 1}
          ],
          "tail": "1-4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": [1],
        "linkedList": {
          "head": null,
          "nodes": [],
          "tail": null
        },
        "method": "removeNodesWithValue",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "1-2", "next": null, "prev": null, "value": 1},
        {"id": "1-3", "next": null, "prev": null, "value": 1},
        {"id": "1-4", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "1-2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1-2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "1-3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["1-3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": [1],
          "method": "removeNodesWithValue"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "1-2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "1-2", "prev": "1", "value": 2},
            {"id": "1-2", "next": null, "prev": "2", "value": 1}
          ],
          "tail": "1-2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1-2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "1-2", "prev": "1", "value": 2},
            {"id": "1-2", "next": "3", "prev": "2", "value": 1},
            {"id": "3", "next": null, "prev": "1-2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "1-3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "1-2", "prev": "1", "value": 2},
            {"id": "1-2", "next": "3", "prev": "2", "value": 1},
            {"id": "3", "next": "1-3", "prev": "1-2", "value": 3},
            {"id": "1-3", "next": null, "prev": "3", "value": 1}
          ],
          "tail": "1-3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["1-3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "1-2", "prev": "1", "value": 2},
            {"id": "1-2", "next": "3", "prev": "2", "value": 1},
            {"id": "3", "next": "1-3", "prev": "1-2", "value": 3},
            {"id": "1-3", "next": "4", "prev": "3", "value": 1},
            {"id": "4", "next": null, "prev": "1-3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": [1],
        "linkedList": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "3", "prev": null, "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "removeNodesWithValue",
        "output": null
      }
    ]
  },
  {
    input: {
      "nodes": [
        {"id": "1", "next": null, "prev": null, "value": 1},
        {"id": "2", "next": null, "prev": null, "value": 2},
        {"id": "3", "next": null, "prev": null, "value": 3},
        {"id": "4", "next": null, "prev": null, "value": 4}
      ],
      "classMethodsToCall": [
        {
          "arguments": ["1"],
          "method": "setHead"
        },
        {
          "arguments": ["1", "2"],
          "method": "insertAfter"
        },
        {
          "arguments": ["2", "3"],
          "method": "insertAfter"
        },
        {
          "arguments": ["3", "4"],
          "method": "insertAfter"
        },
        {
          "arguments": [1],
          "method": "containsNodeWithValue"
        },
        {
          "arguments": [2],
          "method": "containsNodeWithValue"
        },
        {
          "arguments": [3],
          "method": "containsNodeWithValue"
        },
        {
          "arguments": [4],
          "method": "containsNodeWithValue"
        },
        {
          "arguments": [5],
          "method": "containsNodeWithValue"
        }
      ]
    },
    expected: [
      {
        "arguments": ["1"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "prev": null, "value": 1}
          ],
          "tail": "1"
        },
        "method": "setHead",
        "output": null
      },
      {
        "arguments": ["1", "2"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": null, "prev": "1", "value": 2}
          ],
          "tail": "2"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["2", "3"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": null, "prev": "2", "value": 3}
          ],
          "tail": "3"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": ["3", "4"],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "insertAfter",
        "output": null
      },
      {
        "arguments": [1],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "containsNodeWithValue",
        "output": true
      },
      {
        "arguments": [2],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "containsNodeWithValue",
        "output": true
      },
      {
        "arguments": [3],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "containsNodeWithValue",
        "output": true
      },
      {
        "arguments": [4],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "containsNodeWithValue",
        "output": true
      },
      {
        "arguments": [5],
        "linkedList": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "prev": null, "value": 1},
            {"id": "2", "next": "3", "prev": "1", "value": 2},
            {"id": "3", "next": "4", "prev": "2", "value": 3},
            {"id": "4", "next": null, "prev": "3", "value": 4}
          ],
          "tail": "4"
        },
        "method": "containsNodeWithValue",
        "output": false
      }
    ]
  }
];
