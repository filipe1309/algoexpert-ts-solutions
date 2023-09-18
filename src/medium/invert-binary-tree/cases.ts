export default [
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: 9, right: 8, value: 4 },
        { left: null, right: null, value: 8 },
        { left: null, right: null, value: 9 },
        { left: null, right: null, value: 5 },
        { left: 7, right: 6, value: 3 },
        { left: null, right: null, value: 6 },
        { left: null, right: null, value: 7 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:null,right:null},
    expected: {
      nodes: [
        { left: null, right: null, value: 1 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:null},
    expected: {
      nodes: [
        { left: null, right: 2, value: 1 },
        { left: null, right: null, value: 2 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: null, right: null, value: 2 },
        { left: null, right: null, value: 3 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:null},right:{value:3,left:null,right:null}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: null, right: 4, value: 2 },
        { left: null, right: null, value: 4 },
        { left: null, right: null, value: 3 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}},right:{value:3,left:null,right:null}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: null, right: null, value: 4 },
        { left: null, right: null, value: 5 },
        { left: null, right: null, value: 3 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:null}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: null, right: null, value: 4 },
        { left: null, right: null, value: 5 },
        { left: null, right: 6, value: 3 },
        { left: null, right: null, value: 6 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: null, right: null, value: 4 },
        { left: null, right: null, value: 5 },
        { left: 7, right: 6, value: 3 },
        { left: null, right: null, value: 6 },
        { left: null, right: null, value: 7 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: null, right: 8, value: 4 },
        { left: null, right: null, value: 8 },
        { left: null, right: null, value: 5 },
        { left: 7, right: 6, value: 3 },
        { left: null, right: null, value: 6 },
        { left: null, right: null, value: 7 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:{value:10,left:null,right:null},right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: 9, right: 8, value: 4 },
        { left: null, right: null, value: 8 },
        { left: null, right: null, value: 9 },
        { left: null, right: 10, value: 5 },
        { left: null, right: null, value: 10 },
        { left: 7, right: 6, value: 3 },
        { left: null, right: null, value: 6 },
        { left: null, right: null, value: 7 }
      ],
      root: 1
    }
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:{value:12,left:null,right:null}},right:{value:9,left:{value:13,left:null,right:null},right:{value:14,left:null,right:null}}},right:{value:5,left:{value:10,left:null,right:null},right:null}},right:{value:3,left:{value:6,left:null,right:{value:11,left:{value:15,left:null,right:{value:17,left:null,right:{value:18,left:null,right:{value:19,left:{value:20,left:{value:21,left:null,right:null},right:null},right:null}}}},right:{value:16,left:null,right:null}}},right:{value:7,left:null,right:null}}},
    expected: {
      nodes: [
        { left: 3, right: 2, value: 1 },
        { left: 5, right: 4, value: 2 },
        { left: 9, right: 8, value: 4 },
        { left: 12, right: null, value: 8 },
        { left: null, right: null, value: 12 },
        { left: 14, right: 13, value: 9 },
        { left: null, right: null, value: 13 },
        { left: null, right: null, value: 14 },
        { left: null, right: 10, value: 5 },
        { left: null, right: null, value: 10 },
        { left: 7, right: 6, value: 3 },
        { left: 11, right: null, value: 6 },
        { left: 16, right: 15, value: 11 },
        { left: 17, right: null, value: 15 },
        { left: 18, right: null, value: 17 },
        { left: 19, right: null, value: 18 },
        { left: null, right: 20, value: 19 },
        { left: null, right: 21, value: 20 },
        { left: null, right: null, value: 21 },
        { left: null, right: null, value: 16 },
        { left: null, right: null, value: 7 }
      ],
      root: 1
    }
  },
];
