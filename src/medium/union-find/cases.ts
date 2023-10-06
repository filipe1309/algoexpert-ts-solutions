export default [
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "find",
        output: null
      },
      {
        arguments: [1],
        method: "find",
        output: null
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [0, 1],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "find",
        output: null
      },
      {
        arguments: [1],
        method: "find",
        output: null
      },
      {
        arguments: [0, 1],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: null
      },
      {
        arguments: [1],
        method: "find",
        output: null
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [0],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [1],
          method: "createSet"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [1],
        method: "createSet",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [10],
          method: "createSet"
        },
        {
          arguments: [5],
          method: "createSet"
        },
        {
          arguments: [10],
          method: "find"
        },
        {
          arguments: [5],
          method: "find"
        },
        {
          arguments: [10, 5],
          method: "union"
        },
        {
          arguments: [10],
          method: "find"
        },
        {
          arguments: [5],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [10],
        method: "createSet",
        output: null
      },
      {
        arguments: [5],
        method: "createSet",
        output: null
      },
      {
        arguments: [10],
        method: "find",
        output: 10
      },
      {
        arguments: [5],
        method: "find",
        output: 5
      },
      {
        arguments: [10, 5],
        method: "union",
        output: null
      },
      {
        arguments: [10],
        method: "find",
        output: 10
      },
      {
        arguments: [5],
        method: "find",
        output: 10
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [1],
          method: "createSet"
        },
        {
          arguments: [2],
          method: "createSet"
        },
        {
          arguments: [3],
          method: "createSet"
        },
        {
          arguments: [0, 2],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [2],
          method: "find"
        },
        {
          arguments: [3],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [1],
        method: "createSet",
        output: null
      },
      {
        arguments: [2],
        method: "createSet",
        output: null
      },
      {
        arguments: [3],
        method: "createSet",
        output: null
      },
      {
        arguments: [0, 2],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [2],
        method: "find",
        output: 0
      },
      {
        arguments: [3],
        method: "find",
        output: 3
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [2],
          method: "createSet"
        },
        {
          arguments: [0, 2],
          method: "union"
        },
        {
          arguments: [3],
          method: "createSet"
        },
        {
          arguments: [1],
          method: "createSet"
        },
        {
          arguments: [1, 3],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [2],
          method: "find"
        },
        {
          arguments: [3],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [2],
        method: "createSet",
        output: null
      },
      {
        arguments: [0, 2],
        method: "union",
        output: null
      },
      {
        arguments: [3],
        method: "createSet",
        output: null
      },
      {
        arguments: [1],
        method: "createSet",
        output: null
      },
      {
        arguments: [1, 3],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [2],
        method: "find",
        output: 0
      },
      {
        arguments: [3],
        method: "find",
        output: 1
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [2],
          method: "createSet"
        },
        {
          arguments: [0, 2],
          method: "union"
        },
        {
          arguments: [3],
          method: "createSet"
        },
        {
          arguments: [1],
          method: "createSet"
        },
        {
          arguments: [1, 3],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [2],
          method: "find"
        },
        {
          arguments: [3],
          method: "find"
        },
        {
          arguments: [3, 0],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [2],
          method: "find"
        },
        {
          arguments: [3],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [2],
        method: "createSet",
        output: null
      },
      {
        arguments: [0, 2],
        method: "union",
        output: null
      },
      {
        arguments: [3],
        method: "createSet",
        output: null
      },
      {
        arguments: [1],
        method: "createSet",
        output: null
      },
      {
        arguments: [1, 3],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [2],
        method: "find",
        output: 0
      },
      {
        arguments: [3],
        method: "find",
        output: 1
      },
      {
        arguments: [3, 0],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 1
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [2],
        method: "find",
        output: 1
      },
      {
        arguments: [3],
        method: "find",
        output: 1
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [0],
          method: "createSet"
        },
        {
          arguments: [1],
          method: "createSet"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [0, 2],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [0, 1],
          method: "union"
        },
        {
          arguments: [1, 0],
          method: "union"
        },
        {
          arguments: [0],
          method: "find"
        },
        {
          arguments: [1],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [0],
        method: "createSet",
        output: null
      },
      {
        arguments: [1],
        method: "createSet",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [0, 2],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 1
      },
      {
        arguments: [0, 1],
        method: "union",
        output: null
      },
      {
        arguments: [1, 0],
        method: "union",
        output: null
      },
      {
        arguments: [0],
        method: "find",
        output: 0
      },
      {
        arguments: [1],
        method: "find",
        output: 0
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        {
          arguments: [3],
          method: "createSet"
        },
        {
          arguments: [12],
          method: "createSet"
        },
        {
          arguments: [5],
          method: "find"
        },
        {
          arguments: [2],
          method: "createSet"
        },
        {
          arguments: [1000],
          method: "createSet"
        },
        {
          arguments: [1000, 2],
          method: "union"
        },
        {
          arguments: [1000, 5],
          method: "union"
        },
        {
          arguments: [1, 12],
          method: "union"
        },
        {
          arguments: [7],
          method: "createSet"
        },
        {
          arguments: [3, 5],
          method: "union"
        },
        {
          arguments: [7, 3],
          method: "union"
        },
        {
          arguments: [1],
          method: "find"
        },
        {
          arguments: [3],
          method: "find"
        },
        {
          arguments: [12],
          method: "find"
        },
        {
          arguments: [5],
          method: "find"
        },
        {
          arguments: [2],
          method: "find"
        },
        {
          arguments: [1000],
          method: "find"
        },
        {
          arguments: [7],
          method: "find"
        },
        {
          arguments: [3, 12],
          method: "union"
        },
        {
          arguments: [12],
          method: "find"
        }
      ]
    },
    expected: [
      {
        arguments: [3],
        method: "createSet",
        output: null
      },
      {
        arguments: [12],
        method: "createSet",
        output: null
      },
      {
        arguments: [5],
        method: "find",
        output: null
      },
      {
        arguments: [2],
        method: "createSet",
        output: null
      },
      {
        arguments: [1000],
        method: "createSet",
        output: null
      },
      {
        arguments: [1000, 2],
        method: "union",
        output: null
      },
      {
        arguments: [1000, 5],
        method: "union",
        output: null
      },
      {
        arguments: [1, 12],
        method: "union",
        output: null
      },
      {
        arguments: [7],
        method: "createSet",
        output: null
      },
      {
        arguments: [3, 5],
        method: "union",
        output: null
      },
      {
        arguments: [7, 3],
        method: "union",
        output: null
      },
      {
        arguments: [1],
        method: "find",
        output: null
      },
      {
        arguments: [3],
        method: "find",
        output: 7
      },
      {
        arguments: [12],
        method: "find",
        output: 12
      },
      {
        arguments: [5],
        method: "find",
        output: null
      },
      {
        arguments: [2],
        method: "find",
        output: 1000
      },
      {
        arguments: [1000],
        method: "find",
        output: 1000
      },
      {
        arguments: [7],
        method: "find",
        output: 7
      },
      {
        arguments: [3, 12],
        method: "union",
        output: null
      },
      {
        arguments: [12],
        method: "find",
        output: 7
      }
    ]
  }
];
