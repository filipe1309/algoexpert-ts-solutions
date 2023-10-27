export default [
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "2",
        "nodes": [
          {"id": "2", "next": null, "value": 2}
        ]
      }
    },
    expected: null
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": null, "value": 1}
        ]
      }
    },
    expected: {
      "head": "1",
      "nodes": [
        {"id": "1", "next": null, "value": 1}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": null, "value": 2}
        ]
      },
      "linkedListTwo": {
        "head": "4",
        "nodes": [
          {"id": "4", "next": "2", "value": 4},
          {"id": "2", "next": null, "value": 2}
        ]
      }
    },
    expected: {
      "head": "2",
      "nodes": [
        {"id": "2", "next": null, "value": 2}
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
        "head": "4",
        "nodes": [
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "3", "value": 5},
          {"id": "3", "next": null, "value": 3}
        ]
      }
    },
    expected: {
      "head": "3",
      "nodes": [
        {"id": "3", "next": null, "value": 3}
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
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": null, "value": 4}
        ]
      },
      "linkedListTwo": {
        "head": "5",
        "nodes": [
          {"id": "5", "next": "3", "value": 5},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": null, "value": 4}
        ]
      }
    },
    expected: {
      "head": "3",
      "nodes": [
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": null, "value": 4}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": null, "value": 1}
        ]
      },
      "linkedListTwo": {
        "head": "2",
        "nodes": [
          {"id": "2", "next": "3", "value": 2},
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "1", "value": 4},
          {"id": "1", "next": null, "value": 1}
        ]
      }
    },
    expected: {
      "head": "1",
      "nodes": [
        {"id": "1", "next": null, "value": 1}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "5",
        "nodes": [
          {"id": "5", "next": "12", "value": 5},
          {"id": "12", "next": "14", "value": 12},
          {"id": "14", "next": "2", "value": 14},
          {"id": "2", "next": "13", "value": 2},
          {"id": "13", "next": "21", "value": 13},
          {"id": "21", "next": "33", "value": 21},
          {"id": "33", "next": "9", "value": 33},
          {"id": "9", "next": null, "value": 9}
        ]
      },
      "linkedListTwo": {
        "head": "10",
        "nodes": [
          {"id": "10", "next": "3", "value": 10},
          {"id": "3", "next": "48", "value": 3},
          {"id": "48", "next": "0", "value": 48},
          {"id": "0", "next": "13", "value": 0},
          {"id": "13", "next": "21", "value": 13},
          {"id": "21", "next": "33", "value": 21},
          {"id": "33", "next": "9", "value": 33},
          {"id": "9", "next": null, "value": 9}
        ]
      }
    },
    expected: {
      "head": "13",
      "nodes": [
        {"id": "13", "next": "21", "value": 13},
        {"id": "21", "next": "33", "value": 21},
        {"id": "33", "next": "9", "value": 33},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": null, "value": 2}
        ]
      },
      "linkedListTwo": {
        "head": "3",
        "nodes": [
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": null, "value": 4}
        ]
      }
    },
    expected: null
  },
  {
    input: {
      "linkedListOne": {
        "head": "1",
        "nodes": [
          {"id": "1", "next": "2", "value": 1},
          {"id": "2", "next": null, "value": 2}
        ]
      },
      "linkedListTwo": {
        "head": "3",
        "nodes": [
          {"id": "3", "next": "4", "value": 3},
          {"id": "4", "next": "5", "value": 4},
          {"id": "5", "next": "6", "value": 5},
          {"id": "6", "next": null, "value": 6}
        ]
      }
    },
    expected: null
  }
];
