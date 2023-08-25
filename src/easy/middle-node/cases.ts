export default [
  {
    input: {value:1,next:null},
    expected: {value:1,next:null},
  },
  {
    input: {value:1,next:{value:2,next:{value:3,next:null}}},
    expected: {value:2,next:{value:3,next:null}},
  },
  {
    input: {value:5,next:{value:7,next:{value:9,next:null}}},
    expected: {value:7,next:{value:9,next:null}},
  },
  {
    input: {value:1,next:{value:2,next:{value:3,next:{value:4,next:null}}}},
    expected: {value:3,next:{value:4,next:null}},
  },
  {
    input: {value:1,next:{value:2,next:{value:3,next:{value:4,next:{value:5,next:{value:6,next:{value:7,next:{value:8,next:{value:9,next:null}}}}}}}}},
    expected: {value:5,next:{value:6,next:{value:7,next:{value:8,next:{value:9,next:null}}}}},
  },
  {
    input: {value:1,next:{value:2,next:{value:3,next:{value:4,next:{value:5,next:{value:6,next:{value:7,next:{value:8,next:{value:9,next:{value:10,next:null}}}}}}}}}},
    expected: {value:6,next:{value:7,next:{value:8,next:{value:9,next:{value:10,next:null}}}}},
  },
  {
    input: {value:1,next:{value:3,next:{value:4,next:{value:5,next:{value:9,next:{value:10,next:null}}}}}},
    expected: {value:5,next:{value:9,next:{value:10,next:null}}},
  },
  {
    input: {value:1,next:{value:1,next:{value:1,next:{value:3,next:{value:4,next:{value:5,next:{value:5,next:{value:5,next:{value:5,next:{value:10,next:null}}}}}}}}}},
    expected: {value:5,next:{value:5,next:{value:5,next:{value:5,next:{value:10,next:null}}}}},
  },
  {
    input: {value:1,next:{value:2,next:{value:1,next:{value:4,next:{value:5,next:{value:5,next:{value:7,next:{value:10,next:null}}}}}}}},
    expected: {value:5,next:{value:5,next:{value:7,next:{value:10,next:null}}}},
  },
  {
    input: {value:1,next:{value:1,next:{value:1,next:{value:1,next:{value:2,next:{value:3,next:{value:4,next:{value:5,next:{value:5,next:{value:7,next:{value:10,next:null}}}}}}}}}}},
    expected: {value:3,next:{value:4,next:{value:5,next:{value:5,next:{value:7,next:{value:10,next:null}}}}}},
  },
];
