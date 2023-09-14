export default [
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:{value:13,left:null,right:{value:14,left:null,right:null}},right:{value:22,left:null,right:null}}},
    expected: true
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:{value:-5,left:{value:-15,left:{value:-22,left:null,right:null},right:null},right:{value:-5,left:null,right:{value:-2,left:null,right:{value:-1,left:null,right:null}}}},right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:null}}},
    expected: true
  },
  {
    input: {value:10,left:null,right:null},
    expected: true
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:{value:500,left:{value:50,left:null,right:{value:200,left:null,right:null}},right:{value:1500,left:null,right:{value:10000,left:{value:2200,left:null,right:null},right:null}}}}}},
    expected: true
  },
  {
    input: {value:5000,left:{value:5,left:{value:2,left:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:null}}}}},right:{value:3,left:null,right:null}},right:{value:15,left:{value:5,left:null,right:null},right:{value:22,left:null,right:{value:502,left:{value:204,left:{value:203,left:null,right:null},right:{value:205,left:null,right:{value:207,left:{value:206,left:null,right:null},right:{value:208,left:null,right:null}}}},right:null}}}},right:{value:55000,left:null,right:null}},
    expected: true
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:{value:11,left:null,right:null}}},right:{value:15,left:null,right:{value:22,left:null,right:null}}},
    expected: false
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:{value:-5,left:{value:-15,left:{value:-22,left:{value:11,left:null,right:null},right:null},right:null},right:{value:-5,left:null,right:{value:-2,left:null,right:{value:-1,left:null,right:null}}}},right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:null}}},
    expected: false
  },
  {
    input: {value:10,left:{value:11,left:null,right:null},right:{value:12,left:null,right:null}},
    expected: false
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:{value:500,left:{value:50,left:null,right:{value:200,left:null,right:null}},right:{value:1500,left:null,right:{value:10000,left:{value:2200,left:null,right:null},right:{value:9999,left:null,right:null}}}}}}},
    expected: false
  },
  {
    input: {value:100,left:{value:5,left:{value:2,left:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:null}}}}},right:{value:3,left:null,right:null}},right:{value:15,left:{value:5,left:null,right:null},right:{value:22,left:null,right:null}}},right:{value:502,left:{value:204,left:{value:203,left:null,right:null},right:{value:205,left:{value:300,left:null,right:null},right:{value:207,left:{value:206,left:null,right:null},right:{value:208,left:null,right:null}}}},right:{value:55000,left:null,right:null}}},
    expected: false
  },
  {
    input: {value:10,left:{value:5,left:null,right:{value:10,left:null,right:null}},right:{value:15,left:null,right:null}},
    expected: false
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:{value:13,left:null,right:{value:16,left:null,right:null}},right:{value:22,left:null,right:null}}},
    expected: false
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:{value:5,left:null,right:{value:14,left:null,right:null}},right:{value:22,left:null,right:null}}},
    expected: false
  }
]
