export default [
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "E",
      "descendantTwo": "I",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "B", "id": "D", "name": "D"},
          {"ancestor": "B", "id": "E", "name": "E"},
          {"ancestor": "C", "id": "F", "name": "F"},
          {"ancestor": "C", "id": "G", "name": "G"},
          {"ancestor": "D", "id": "H", "name": "H"},
          {"ancestor": "D", "id": "I", "name": "I"}
        ]
      }
    },
    expected: {
      "nodeId": "B"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "A",
      "descendantTwo": "B",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "B",
      "descendantTwo": "F",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "G",
      "descendantTwo": "M",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "U",
      "descendantTwo": "S",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "Z",
      "descendantTwo": "M",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "O",
      "descendantTwo": "I",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "B"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "T",
      "descendantTwo": "Z",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "H"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "T",
      "descendantTwo": "V",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "H"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "T",
      "descendantTwo": "H",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "H"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "W",
      "descendantTwo": "V",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "V"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "Z",
      "descendantTwo": "B",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "B"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "Q",
      "descendantTwo": "W",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "H"
    }
  },
  {
    input: {
      "topAncestor": "A",
      "descendantOne": "A",
      "descendantTwo": "Z",
      "ancestralTree": {
        "nodes": [
          {"ancestor": null, "id": "A", "name": "A"},
          {"ancestor": "A", "id": "B", "name": "B"},
          {"ancestor": "A", "id": "C", "name": "C"},
          {"ancestor": "A", "id": "D", "name": "D"},
          {"ancestor": "A", "id": "E", "name": "E"},
          {"ancestor": "A", "id": "F", "name": "F"},
          {"ancestor": "B", "id": "G", "name": "G"},
          {"ancestor": "B", "id": "H", "name": "H"},
          {"ancestor": "B", "id": "I", "name": "I"},
          {"ancestor": "C", "id": "J", "name": "J"},
          {"ancestor": "D", "id": "K", "name": "K"},
          {"ancestor": "D", "id": "L", "name": "L"},
          {"ancestor": "F", "id": "M", "name": "M"},
          {"ancestor": "F", "id": "N", "name": "N"},
          {"ancestor": "H", "id": "O", "name": "O"},
          {"ancestor": "H", "id": "P", "name": "P"},
          {"ancestor": "H", "id": "Q", "name": "Q"},
          {"ancestor": "H", "id": "R", "name": "R"},
          {"ancestor": "K", "id": "S", "name": "S"},
          {"ancestor": "P", "id": "T", "name": "T"},
          {"ancestor": "P", "id": "U", "name": "U"},
          {"ancestor": "R", "id": "V", "name": "V"},
          {"ancestor": "V", "id": "W", "name": "W"},
          {"ancestor": "V", "id": "X", "name": "X"},
          {"ancestor": "V", "id": "Y", "name": "Y"},
          {"ancestor": "X", "id": "Z", "name": "Z"}
        ]
      }
    },
    expected: {
      "nodeId": "A"
    }
  }
];
