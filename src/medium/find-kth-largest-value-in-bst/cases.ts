export default [
  {
    input: {
      tree: {value:15,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:{value:3,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:20,left:{value:17,left:null,right:null},right:{value:22,left:null,right:null}}},
      k: 3
    },
    expected: 17
  },
  {
    input: {
      tree: {value:5,left:{value:4,left:{value:3,left:null,right:null},right:null},right:{value:6,left:null,right:{value:7,left:null,right:null}}},
      k: 1
    },
    expected: 7
  },
  {
    input: { 
      tree: {value:5,left:null,right:null},
      k: 1 
    },
    expected: 5
  },
  {
    input: {
      tree: {value:20,left:{value:15,left:{value:10,left:null,right:null},right:{value:19,left:null,right:null}},right:{value:25,left:{value:21,left:null,right:{value:22,left:null,right:null}},right:{value:30,left:null,right:null}}},
      k: 3
    },
    expected: 22
  },
  {
    input: {
      tree: {value:1,left:null,right:{value:2,left:null,right:{value:3,left:null,right:{value:4,left:null,right:{value:5,left:null,right:null}}}}},
      k: 5
    },
    expected: 1
  },
  {
    input: {
      tree: {value:10,left:{value:8,left:{value:6,left:{value:4,left:{value:2,left:null,right:null},right:null},right:null},right:null},right:null},
      k: 2
    },
    expected: 8
  },
  {
    input: {
      tree: {value:10,left:{value:8,left:{value:6,left:{value:4,left:{value:2,left:null,right:{value:3,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:7,left:null,right:null}},right:{value:9,left:null,right:null}},right:null},
      k: 5
    },
    expected: 6
  },
  {
    input: {
      tree: {value:99727,left:{value:99,left:null,right:{value:727,left:null,right:null}},right:null},
      k: 1
    },
    expected: 99727
  },
  {
    input: {
      tree: {value:15,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:{value:3,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:20,left:{value:17,left:null,right:null},right:{value:22,left:null,right:{value:24,left:{value:23,left:null,right:null},right:{value:25,left:null,right:null}}}}},
      k: 7
    },
    expected: 15
  },
  {
    input: {
      tree: {value:15,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:{value:3,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:20,left:{value:17,left:null,right:null},right:{value:22,left:null,right:null}}},
      k: 5
    },
    expected: 5
  },
  {
    input: {
      tree: {value:15,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:{value:3,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:20,left:{value:17,left:null,right:null},right:{value:22,left:null,right:null}}},
      k: 6
    },
    expected: 5
  }
];
