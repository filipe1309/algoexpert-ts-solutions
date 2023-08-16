export default [
  {
    input: {
      tree: { value: 10, left: { value: 5, left: { value: 2, left: { value: 1 }}, right: { value: 5 }}, right: { value: 15, left: { value: 13 }, right: { value: 22 } }}, 
      target: 12
    },
    expected: 13,
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 100,
    },
    expected: 100
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 208,
    },
    expected: 208
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 4500,
    },
    expected: 4500
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 4501,
    },
    expected: 4500
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: -70
    },
    expected: -51
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 2000,
    },
    expected: 1001
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 6,
    },
    expected: 5
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 30000,
    },
    expected: 55000
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: -1,
    },
    expected: 1
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 29751,
    },
    expected: 55000
  },
  { 
    input: { 
      tree: { value: 100, left: { value: 5, left: { value: 2, left: { value: 1, left: { value: -51, left: { value:-403}}, right:{ value: 1, right:{ value: 1, right:{ value: 1, right:{ value: 1 }}}}}, right:{ value: 3 }}, right:{ value: 15, left: { value: 5 }, right:{ value: 22, right:{ value: 57, right:{ value: 60 }}}}}, right:{ value: 502, left: { value: 204, left: { value: 203 }, right:{ value: 205, right:{ value: 207, left: { value: 206 }, right:{ value: 208 }}}}, right:{ value: 55000, left: { value: 1001, right:{ value: 4500 }}}}},
      target: 29749,
    },
    expected: 4500
  },
];
