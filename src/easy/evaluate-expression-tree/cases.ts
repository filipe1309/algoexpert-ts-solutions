export default [
  {
    input: {value:-1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: 5
  },
  {
    input: {value:-2,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: -1
  },
  {
    input: {value:-2,left:{value:3,left:null,right:null},right:{value:2,left:null,right:null}},
    expected: 1
  },
  {
    input: {value:-3,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: 0
  },
  {
    input: {value:-3,left:{value:3,left:null,right:null},right:{value:2,left:null,right:null}},
    expected: 1
  },
  {
    input: {value:-4,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}},
    expected: 6
  },
  {
    input: {value:-1,left:{value:2,left:null,right:null},right:{value:-2,left:{value:4,left:null,right:null},right:{value:5,left:null,right:null}}},
    expected: 1
  },
  {
    input: {value:-3,left:{value:10,left:null,right:null},right:{value:-2,left:{value:4,left:null,right:null},right:{value:6,left:null,right:null}}},
    expected: -5
  },
  {
    input: {value:-3,left:{value:9,left:null,right:null},right:{value:-2,left:{value:4,left:null,right:null},right:{value:6,left:null,right:null}}},
    expected: -4
  },
  {
    input: {value:-3,left:{value:9,left:null,right:null},right:{value:-2,left:{value:6,left:null,right:null},right:{value:4,left:null,right:null}}},
    expected: 4
  },
  {
    input: {value:-2,left:{value:-1,left:{value:7,left:null,right:null},right:{value:10,left:null,right:null}},right:{value:-3,left:{value:12,left:null,right:null},right:{value:-4,left:{value:1,left:null,right:null},right:{value:4,left:null,right:null}}}},
    expected: 14
  },
  {
    input: {value:-1,left:{value:-2,left:{value:7,left:null,right:null},right:{value:10,left:null,right:null}},right:{value:-4,left:{value:12,left:null,right:null},right:{value:-3,left:{value:8,left:null,right:null},right:{value:4,left:null,right:null}}}},
    expected: 21
  },
  {
    input: {value:-1,left:{value:-1,left:{value:7,left:null,right:null},right:{value:10,left:null,right:null}},right:{value:-1,left:{value:12,left:null,right:null},right:{value:-1,left:{value:8,left:null,right:null},right:{value:4,left:null,right:null}}}},
    expected: 41
  },
  {
    input: {value:-2,left:{value:-2,left:{value:7,left:null,right:null},right:{value:10,left:null,right:null}},right:{value:-2,left:{value:12,left:null,right:null},right:{value:-2,left:{value:8,left:null,right:null},right:{value:4,left:null,right:null}}}},
    expected: -11
  },
  {
    input: {value:-3,left:{value:-3,left:{value:100,left:null,right:null},right:{value:10,left:null,right:null}},right:{value:-3,left:{value:4,left:null,right:null},right:{value:-3,left:{value:8,left:null,right:null},right:{value:4,left:null,right:null}}}},
    expected: 5
  },
  {
    input: {value:-4,left:{value:-4,left:{value:2,left:null,right:null},right:{value:1,left:null,right:null}},right:{value:-4,left:{value:7,left:null,right:null},right:{value:-4,left:{value:8,left:null,right:null},right:{value:2,left:null,right:null}}}},
    expected: 224
  },
  {
    input: {value:-4,left:{value:-1,left:{value:-1,left:{value:7,left:null,right:null},right:{value:-2,left:{value:22,left:null,right:null},right:{value:5,left:null,right:null}}},right:{value:8,left:null,right:null}},right:{value:-3,left:{value:100,left:null,right:null},right:{value:-2,left:{value:42,left:null,right:null},right:{value:-3,left:{value:-4,left:{value:3,left:null,right:null},right:{value:9,left:null,right:null}},right:{value:2,left:null,right:null}}}}},
    expected: 96
  }
];
