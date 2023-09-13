// BST Construction cases
export default [
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [2], method: 'insert' },
        { arguments: [5], method: 'insert' },
        { arguments: [13], method: 'insert' },
        { arguments: [22], method: 'insert' },
        { arguments: [1], method: 'insert' },
        { arguments: [14], method: 'insert' },
        { arguments: [12], method: 'insert' },
        { arguments: [10], method: 'remove' },
        { arguments: [15], method: 'contains' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: 2, right: null, value: 5 },
            { left: null, right: null, value: 2 }
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: null, right: null, value: 2 }
          ],
          root: 10
        }
      },
      {
        arguments: [13],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: 13, right: null, value: 15 },
            { left: null, right: null, value: 13 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: null, right: null, value: 2 }
          ],
          root: 10
        }
      },
      {
        arguments: [22],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: null, right: null, value: 13 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: null, right: null, value: 2 }
          ],
          root: 10
        }
      },
      {
        arguments: [1],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: null, right: null, value: 13 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: 1, right: null, value: 2 },
            { left: null, right: null, value: 1 }
          ],
          root: 10
        }
      },
      {
        arguments: [14],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: null, right: 14, value: 13 },
            { left: null, right: null, value: 14 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: 1, right: null, value: 2 },
            { left: null, right: null, value: 1 }
          ],
          root: 10
        }
      },
      {
        arguments: [12],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: 12, right: 14, value: 13 },
            { left: null, right: null, value: 14 },
            { left: null, right: null, value: 12 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: 1, right: null, value: 2 },
            { left: null, right: null, value: 1 }
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 12 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: null, right: 14, value: 13 },
            { left: null, right: null, value: 14 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: 1, right: null, value: 2 },
            { left: null, right: null, value: 1 }
          ],
          root: 12
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 12 },
            { left: 13, right: 22, value: 15 },
            { left: null, right: null, value: 22 },
            { left: null, right: 14, value: 13 },
            { left: null, right: null, value: 14 },
            { left: 2, right: 5, value: 5 },
            { left: null, right: null, value: 5 },
            { left: 1, right: null, value: 2 },
            { left: null, right: null, value: 1 }
          ],
          root: 12
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [10], method: 'contains' },
        { arguments: [5], method: 'contains' },
        { arguments: [15], method: 'contains' },
        { arguments: [1], method: 'contains' },
        { arguments: [6], method: 'contains' },
        { arguments: [11], method: 'contains' },
        { arguments: [16], method: 'contains' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [1],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [6],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [11],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [16],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [5], method: 'remove' },
        { arguments: [15], method: 'remove' },
        { arguments: [10], method: 'remove' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 15, value: 10 },
            { left: null, right: null, value: 15 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: null, value: 10 }
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: null, value: 10 }
          ],
          root: 10
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [10], method: 'contains' },
        { arguments: [5], method: 'contains' },
        { arguments: [15], method: 'contains' },
        { arguments: [10], method: 'remove' },
        { arguments: [5], method: 'remove' },
        { arguments: [15], method: 'remove' },
        { arguments: [10], method: 'contains' },
        { arguments: [5], method: 'contains' },
        { arguments: [15], method: 'contains' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10 },
            { left: null, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 15 },
            { left: null, right: null, value: 5 }
          ],
          root: 15
        }
      },
      {
        arguments: [5],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: null, value: 15 }
          ],
          root: 15
        }
      },
      {
        arguments: [15],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: null, value: 15 }
          ],
          root: 15
        }
      },
      {
        arguments: [10],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: null, right: null, value: 15 }
          ],
          root: 15
        }
      },
      {
        arguments: [5],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: null, right: null, value: 15 }
          ],
          root: 15
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: null, right: null, value: 15 }
          ],
          root: 15
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [2], method: 'insert' },
        { arguments: [3], method: 'insert' },
        { arguments: [4], method: 'insert' },
        { arguments: [5], method: 'insert' },
        { arguments: [6], method: 'insert' },
        { arguments: [7], method: 'insert' },
        { arguments: [8], method: 'insert' },
        { arguments: [9], method: 'insert' },
        { arguments: [10], method: 'insert' },
        { arguments: [11], method: 'insert' },
        { arguments: [12], method: 'insert' },
        { arguments: [13], method: 'insert' },
        { arguments: [14], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [16], method: 'insert' },
        { arguments: [17], method: 'insert' },
        { arguments: [18], method: 'insert' },
        { arguments: [19], method: 'insert' },
        { arguments: [20], method: 'insert' },
        { arguments: [2], method: 'remove' },
        { arguments: [4], method: 'remove' },
        { arguments: [6], method: 'remove' },
        { arguments: [8], method: 'remove' },
        { arguments: [11], method: 'remove' },
        { arguments: [13], method: 'remove' },
        { arguments: [15], method: 'remove' },
        { arguments: [17], method: 'remove' },
        { arguments: [19], method: 'remove' },
        { arguments: [1], method: 'insert' },
        { arguments: [2], method: 'insert' },
        { arguments: [3], method: 'insert' },
        { arguments: [4], method: 'insert' },
        { arguments: [5], method: 'insert' },
        { arguments: [6], method: 'insert' },
        { arguments: [7], method: 'insert' },
        { arguments: [8], method: 'insert' },
        { arguments: [9], method: 'insert' },
        { arguments: [10], method: 'insert' },
        { arguments: [9000], method: 'contains' }
      ],
      rootValue: 1
    },
    expected: [
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [3],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: null, value: 3 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 }
          ],
          root: 1
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: null, value: 5 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 }
          ],
          root: 1
        }
      },
      {
        arguments: [7],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: null, value: 7 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 }
          ],
          root: 1
        }
      },
      {
        arguments: [9],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: null, value: 9 }
          ],
          root: 1
        }
      },
      {
        arguments: [10],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: null, value: 10 }
          ],
          root: 1
        }
      },
      {
        arguments: [11],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: null, value: 11 }
          ],
          root: 1
        }
      },
      {
        arguments: [12],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: null, value: 12 }
          ],
          root: 1
        }
      },
      {
        arguments: [13],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: null, value: 13 }
          ],
          root: 1
        }
      },
      {
        arguments: [14],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: null, value: 14 }
          ],
          root: 1
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: null, value: 15 }
          ],
          root: 1
        }
      },
      {
        arguments: [16],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: null, value: 16 }
          ],
          root: 1
        }
      },
      {
        arguments: [17],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: null, value: 17 }
          ],
          root: 1
        }
      },
      {
        arguments: [18],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: null, value: 18 }
          ],
          root: 1
        }
      },
      {
        arguments: [19],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: null, value: 19 }
          ],
          root: 1
        }
      },
      {
        arguments: [20],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [2],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [11],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [13],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [15],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [17],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [19],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [1],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 1 }
          ],
          root: 1
        }
      },
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [3],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 3 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 5 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [7],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 7 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [9],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [10],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: 10, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 10 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [9000],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: 10, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 10 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [2], method: 'insert' },
        { arguments: [3], method: 'insert' },
        { arguments: [4], method: 'insert' },
        { arguments: [1], method: 'remove' }
      ],
      rootValue: 1
    },
    expected: [
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [3],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: null, value: 3 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 }
          ],
          root: 1
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: null, value: 5 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 }
          ],
          root: 1
        }
      },
      {
        arguments: [7],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: null, value: 7 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 }
          ],
          root: 1
        }
      },
      {
        arguments: [9],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: null, value: 9 }
          ],
          root: 1
        }
      },
      {
        arguments: [10],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: null, value: 10 }
          ],
          root: 1
        }
      },
      {
        arguments: [11],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: null, value: 11 }
          ],
          root: 1
        }
      },
      {
        arguments: [12],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: null, value: 12 }
          ],
          root: 1
        }
      },
      {
        arguments: [13],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: null, value: 13 }
          ],
          root: 1
        }
      },
      {
        arguments: [14],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: null, value: 14 }
          ],
          root: 1
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: null, value: 15 }
          ],
          root: 1
        }
      },
      {
        arguments: [16],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: null, value: 16 }
          ],
          root: 1
        }
      },
      {
        arguments: [17],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: null, value: 17 }
          ],
          root: 1
        }
      },
      {
        arguments: [18],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: null, value: 18 }
          ],
          root: 1
        }
      },
      {
        arguments: [19],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: null, value: 19 }
          ],
          root: 1
        }
      },
      {
        arguments: [20],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 2, value: 1 },
            { left: null, right: 3, value: 2 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [2],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 4, value: 3 },
            { left: null, right: 5, value: 4 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 6, value: 5 },
            { left: null, right: 7, value: 6 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 8, value: 7 },
            { left: null, right: 9, value: 8 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 11, value: 10 },
            { left: null, right: 12, value: 11 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [11],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 13, value: 12 },
            { left: null, right: 14, value: 13 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [13],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 15, value: 14 },
            { left: null, right: 16, value: 15 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [15],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 17, value: 16 },
            { left: null, right: 18, value: 17 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [17],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 19, value: 18 },
            { left: null, right: 20, value: 19 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [19],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: null, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 }
          ],
          root: 1
        }
      },
      {
        arguments: [1],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 1 }
          ],
          root: 1
        }
      },
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: null, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [3],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 3 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [4],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: null, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 5 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [6],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: null, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [7],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 7 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [8],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: null, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [9],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: null, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [10],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: 10, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 10 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      },
      {
        arguments: [9000],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: null, right: 3, value: 1 },
            { left: 1, right: 5, value: 3 },
            { left: 3, right: 7, value: 5 },
            { left: 5, right: 9, value: 7 },
            { left: 7, right: 10, value: 9 },
            { left: 9, right: 12, value: 10 },
            { left: 10, right: 14, value: 12 },
            { left: null, right: 16, value: 14 },
            { left: null, right: 18, value: 16 },
            { left: null, right: 20, value: 18 },
            { left: null, right: null, value: 20 },
            { left: null, right: null, value: 10 },
            { left: null, right: null, value: 9 },
            { left: null, right: 8, value: 7 },
            { left: null, right: null, value: 8 },
            { left: null, right: 6, value: 5 },
            { left: null, right: null, value: 6 },
            { left: null, right: 4, value: 3 },
            { left: null, right: null, value: 4 },
            { left: null, right: 2, value: 1 },
            { left: null, right: null, value: 2 }
          ],
          root: 1
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [-2], method: 'insert' },
        { arguments: [-3], method: 'insert' },
        { arguments: [-4], method: 'insert' },
        { arguments: [1], method: 'remove' }
      ],
      rootValue: 1
    },
    expected: [
      {
        arguments: [-2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: -2, right: null, value: 1 },
            { left: null, right: null, value: -2 }
          ],
          root: 1
        }
      },
      {
        arguments: [-3],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: -2, right: null, value: 1 },
            { left: -3, right: null, value: -2 },
            { left: null, right: null, value: -3 }
          ],
          root: 1
        }
      },
      {
        arguments: [-4],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: -2, right: null, value: 1 },
            { left: -3, right: null, value: -2 },
            { left: -4, right: null, value: -3 },
            { left: null, right: null, value: -4 }
          ],
          root: 1
        }
      },
      {
        arguments: [1],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: -3, right: null, value: -2 },
            { left: -4, right: null, value: -3 },
            { left: null, right: null, value: -4 }
          ],
          root: -2
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [10], method: 'remove' },
        { arguments: [15], method: 'contains' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10},
            { left: null, right: null, value: 5}
          ],
          root: 10
        }
      },
      {
        arguments: [10],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: null, value: 5}
          ],
          root: 5
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: false,
        tree: {
          nodes: [
            { left: null, right: null, value: 5}
          ],
          root: 5
        }
      }
    ]
  },
  {
    input: {
      classMethodsToCall: [
        { arguments: [5], method: 'insert' },
        { arguments: [15], method: 'insert' },
        { arguments: [2], method: 'insert' },
        { arguments: [5], method: 'insert' },
        { arguments: [13], method: 'insert' },
        { arguments: [22], method: 'insert' },
        { arguments: [1], method: 'insert' },
        { arguments: [14], method: 'insert' },
        { arguments: [12], method: 'insert' },
        { arguments: [5], method: 'remove' },
        { arguments: [5], method: 'remove' },
        { arguments: [12], method: 'remove' },
        { arguments: [13], method: 'remove' },
        { arguments: [14], method: 'remove' },
        { arguments: [22], method: 'remove' },
        { arguments: [2], method: 'remove' },
        { arguments: [1], method: 'remove' },
        { arguments: [15], method: 'contains' }
      ],
      rootValue: 10
    },
    expected: [
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: null, value: 10},
            { left: null, right: null, value: 5}
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: null, right: null, value: 15},
            { left: null, right: null, value: 5}
          ],
          root: 10
        }
      },
      {
        arguments: [2],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: null, right: null, value: 15},
            { left: 2, right: null, value: 5},
            { left: null, right: null, value: 2}
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: null, right: null, value: 15},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: null, right: null, value: 2}
          ],
          root: 10
        }
      },
      {
        arguments: [13],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: null, value: 15},
            { left: null, right: null, value: 13},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: null, right: null, value: 2}
          ],
          root: 10
        }
      },
      {
        arguments: [22],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: null, right: null, value: 13},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: null, right: null, value: 2}
          ],
          root: 10
        }
      },
      {
        arguments: [1],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: null, right: null, value: 13},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [14],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: null, right: 14, value: 13},
            { left: null, right: null, value: 14},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [12],
        method: 'insert',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: 12, right: 14, value: 13},
            { left: null, right: null, value: 14},
            { left: null, right: null, value: 12},
            { left: 2, right: 5, value: 5},
            { left: null, right: null, value: 5},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 5, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: 12, right: 14, value: 13},
            { left: null, right: null, value: 14},
            { left: null, right: null, value: 12},
            { left: 2, right: null, value: 5},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [5],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 2, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: 12, right: 14, value: 13},
            { left: null, right: null, value: 14},
            { left: null, right: null, value: 12},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [12],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 2, right: 15, value: 10},
            { left: 13, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: null, right: 14, value: 13},
            { left: null, right: null, value: 14},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [13],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 2, right: 15, value: 10},
            { left: 14, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: null, right: null, value: 14},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [14],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 2, right: 15, value: 10},
            { left: null, right: 22, value: 15},
            { left: null, right: null, value: 22},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [22],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 2, right: 15, value: 10},
            { left: null, right: null, value: 15},
            { left: 1, right: null, value: 2},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [2],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: 1, right: 15, value: 10},
            { left: null, right: null, value: 15},
            { left: null, right: null, value: 1}
          ],
          root: 10
        }
      },
      {
        arguments: [1],
        method: 'remove',
        output: null,
        tree: {
          nodes: [
            { left: null, right: 15, value: 10},
            { left: null, right: null, value: 15}
          ],
          root: 10
        }
      },
      {
        arguments: [15],
        method: 'contains',
        output: true,
        tree: {
          nodes: [
            { left: null, right: 15, value: 10},
            { left: null, right: null, value: 15}
          ],
          root: 10
        }
      }
    ]
  }
];
