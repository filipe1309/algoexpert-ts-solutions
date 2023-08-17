export default [
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:{value:10,left:null,right:null},right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: [15, 16, 18, 10, 11],
  },
  {
    input: {value:1,left:null,right:null},
    expected: [1],
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:null},
    expected: [3],
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: [3, 4],
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}},right:{value:3,left:null,right:null}},
    expected: [7, 8, 4],
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:{value:8,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:5,left:{value:10,left:null,right:null},right:{value:1,left:null,right:null}}},right:{value:3,left:{value:6,left:{value:1,left:null,right:null},right:{value:1,left:null,right:null}},right:{value:7,left:null,right:null}}},
    expected: [15, 16, 18, 9, 11, 11, 11],
  },
  {
    input: {value:0,left:{value:1,left:{value:10,left:{value:100,left:null,right:null},right:null},right:null},right:null},
    expected: [111],
  },
  {
    input: {value:0,left:null,right:{value:1,left:null,right:{value:10,left:null,right:{value:100,left:null,right:null}}}},
    expected: [111],
  },
  {
    input: {value:0,left:{value:9,left:null,right:null},right:{value:1,left:{value:15,left:null,right:null},right:{value:10,left:{value:100,left:null,right:null},right:{value:200,left:null,right:null}}}},
    expected: [9, 16, 111, 211],
  },
];
