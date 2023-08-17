export default [
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: 16
  },
  {
    input: {value:1,left:null,right:null},
    expected: 0
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:null},
    expected: 1
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: 2
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:null},right:{value:3,left:null,right:null}},
    expected: 4
  },
  {
    input: {value:1,left:{value:2,left:{value:3,left:{value:4,left:{value:5,left:{value:6,left:null,right:{value:7,left:null,right:null}},right:null},right:null},right:null},right:null},right:null},
    expected: 21
  },
  {
    input: {value:1,left:{value:2,left:{value:3,left:{value:4,left:{value:5,left:{value:6,left:null,right:{value:7,left:null,right:null}},right:null},right:null},right:null},right:null},right:{value:8,left:null,right:{value:9,left:null,right:{value:10,left:null,right:{value:11,left:null,right:{value:12,left:{value:13,left:null,right:null},right:null}}}}}},
    expected: 42
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:{value:10,left:null,right:{value:11,left:{value:12,left:{value:14,left:null,right:null},right:null},right:{value:13,left:{value:15,left:null,right:null},right:{value:16,left:null,right:null}}}},right:null},right:{value:7,left:null,right:null}}},
    expected: 51
  },
  {
    input: {value:1,left:{value:2,left:{value:3,left:{value:4,left:{value:5,left:{value:6,left:{value:7,left:{value:8,left:{value:9,left:null,right:null},right:null},right:null},right:null},right:null},right:null},right:null},right:null},right:null},
    expected: 36
  }
];
