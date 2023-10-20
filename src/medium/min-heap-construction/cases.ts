export default [
  {
    input: {
      "array": [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41],
      "classMethodsToCall": [
        {
          "arguments": [76],
          "method": "insert"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [87],
          "method": "insert"
        }
      ]
    },
    expected: [
      {
        "arguments": [76],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -5
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -5
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": 2
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": 2
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": 6
      },
      {
        "arguments": [87],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      }
    ]
  },
  {
    input: {
      "array": [2, 3, 1],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": 1
      }
    ]
  },
  {
    input: {
      "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": 1
      }
    ]
  },
  {
    input: {
      "array": [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -10
      }
    ]
  },
  {
    input: {
      "array": [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [-8],
          "method": "insert"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "peek"
        },
        {
          "arguments": [8],
          "method": "insert"
        },
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -10
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -10
      },
      {
        "arguments": [-8],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -10
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -10
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -9
      },
      {
        "arguments": [8],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -9
      }
    ]
  },
  {
    input: {
      "array": [427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764, -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56, 507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3, -153, 240, -160, -610, -583, -27, 131],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -991
      }
    ]
  },
  {
    input: {
      "array": [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 382, -827, -796, 372, 753, 519, 906],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [992],
          "method": "insert"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -998
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -882
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -827
      },
      {
        "arguments": [992],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      }
    ]
  },
  {
    input: {
      "array": [544, -578, 556, 713, -655, -359, -810, -731, 194, -531, -685, 689, -279, -738, 886, -54, -320, -500, 738, 445, -401, 993, -753, 329, -396, -924, -975, 376, 748, -356, 972, 459, 399, 669, -488, 568, -702, 551, 763, -90, -249, -45, 452, -917, 394, 195, -877, 153, 153, 788, 844, 867, 266, -739, 904, -154, -947, 464, 343, -312, 150, -656, 528, 61, 94, -581],
      "classMethodsToCall": [
        {
          "arguments": [],
          "method": "peek"
        }
      ]
    },
    expected: [
      {
        "arguments": [],
        "method": "peek",
        "minHeapPropertySatisfied": true,
        "output": -975
      }
    ]
  },
  {
    input: {
      "array": [-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59],
      "classMethodsToCall": [
        {
          "arguments": [2],
          "method": "insert"
        },
        {
          "arguments": [22],
          "method": "insert"
        },
        {
          "arguments": [222],
          "method": "insert"
        },
        {
          "arguments": [2222],
          "method": "insert"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "remove"
        },
        {
          "arguments": [],
          "method": "remove"
        }
      ]
    },
    expected: [
      {
        "arguments": [2],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [22],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [222],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [2222],
        "method": "insert",
        "minHeapPropertySatisfied": true,
        "output": null
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -987
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -950
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -949
      },
      {
        "arguments": [],
        "method": "remove",
        "minHeapPropertySatisfied": true,
        "output": -942
      }
    ]
  }
];
