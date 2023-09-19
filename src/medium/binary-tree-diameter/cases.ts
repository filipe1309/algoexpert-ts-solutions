export default [
  {
    input: {value:1,left:{value:3,left:{value:7,left:{value:8,left:{value:9,left:null,right:null},right:null},right:null},right:{value:4,left:null,right:{value:5,left:null,right:{value:6,left:null,right:null}}}},right:{value:2,left:null,right:null}},
    expected: 6
  },
  {
    input: {value:1,left:{value:2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}},right:{value:3,left:{value:6,left:null,right:null},right:{value:7,left:null,right:null}}},
    expected: 4
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: 2
  },
  {
    input: {value:1,left:{value:2,left:null,right:null},right:{value:-1,left:null,right:null}},
    expected: 2
  },
  {
    input: {value:1,left:{value:-5,left:{value:6,left:null,right:null},right:null},right:{value:3,left:null,right:null}},
    expected: 3
  },
  {
    input: {value:1,left:{value:3,left:null,right:null},right:{value:9,left:{value:14,left:null,right:{value:19,left:{value:25,left:null,right:null},right:null}},right:{value:10,left:null,right:{value:11,left:null,right:{value:12,left:null,right:{value:17,left:null,right:null}}}}}},
    expected: 7
  },
  {
    input: {value:1,left:{value:3,left:null,right:null},right:{value:5,left:null,right:null}},
    expected: 2
  },
  {
    input: {value:1,left:{value:5,left:{value:7,left:{value:8,left:null,right:null},right:null},right:{value:9,left:null,right:{value:12,left:null,right:null}}},right:null},
    expected: 4
  },
  {
    input: {value:1,left:null,right:null},
    expected: 0
  },
  {
    input: {value:4,left:{value:2,left:null,right:null},right:null},
    expected: 1
  },
  {
    input: {value:4,left:{value:2,left:{value:1,left:null,right:null},right:null},right:null},
    expected: 2
  },
  {
    input: {value:4,left:{value:2,left:{value:1,left:null,right:{value:3,left:{value:19,left:null,right:null},right:null}},right:null},right:null},
    expected: 4
  },
  {
    input: {value:6,left:null,right:{value:1,left:null,right:null}},
    expected: 1
  },
  {
    input: {value:3,left:null,right:{value:10,left:{value:1,left:null,right:null},right:null}},
    expected: 2
  },
  {
    input: {value:2,left:{value:1,left:{value:3,left:null,right:{value:5,left:null,right:{value:10,left:null,right:null}}},right:null},right:null},
    expected: 4
  },
];
