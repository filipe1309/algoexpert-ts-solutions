export default [
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:null}}},
    expected: {
      inOrderArray: [1, 2, 5, 5, 10, 15, 22],
      postOrderArray: [1, 2, 5, 5, 22, 15, 10],
      preOrderArray: [10, 5, 2, 1, 5, 15, 22]
    }
  },
  {
    input: {value:100,left:{value:5,left:{value:2,left:{value:1,left:{value:-51,left:{value:-403,left:null,right:null},right:null},right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:null}}}}},right:{value:3,left:null,right:null}},right:{value:15,left:{value:5,left:null,right:null},right:{value:22,left:null,right:{value:57,left:null,right:{value:60,left:null,right:null}}}}},right:{value:502,left:{value:204,left:{value:203,left:null,right:null},right:{value:205,left:null,right:{value:207,left:{value:206,left:null,right:null},right:{value:208,left:null,right:null}}}},right:{value:55000,left:{value:1001,left:null,right:{value:4500,left:null,right:null}},right:null}}},
    expected: {
      inOrderArray: [-403, -51, 1, 1, 1, 1, 1, 2, 3, 5, 5, 15, 22, 57, 60, 100, 203, 204, 205, 206, 207, 208, 502, 1001, 4500, 55000],
      postOrderArray: [-403, -51, 1, 1, 1, 1, 1, 3, 2, 5, 60, 57, 22, 15, 5, 203, 206, 208, 207, 205, 204, 4500, 1001, 55000, 502, 100],
      preOrderArray: [100, 5, 2, 1, -51, -403, 1, 1, 1, 1, 3, 15, 5, 22, 57, 60, 502, 204, 203, 205, 207, 206, 208, 55000, 1001, 4500]
    }
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:{value:-5,left:{value:-15,left:{value:-22,left:null,right:null},right:null},right:{value:-5,left:null,right:{value:-2,left:null,right:{value:-1,left:null,right:null}}}},right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:null}}},
    expected: {
      inOrderArray: [-22, -15, -5, -5, -2, -1, 1, 2, 5, 5, 10, 15, 22],
      postOrderArray: [-22, -15, -1, -2, -5, -5, 1, 2, 5, 5, 22, 15, 10],
      preOrderArray: [10, 5, 2, 1, -5, -15, -22, -5, -2, -1, 5, 15, 22]
    }
  },
  {
    input: {value:10,left:null,right:null},
    expected: {
      inOrderArray: [10],
      postOrderArray: [10],
      preOrderArray: [10]
    }
  },
  {
    input: {value:10,left:{value:5,left:{value:2,left:{value:1,left:null,right:null},right:null},right:{value:5,left:null,right:null}},right:{value:15,left:null,right:{value:22,left:null,right:{value:500,left:{value:50,left:null,right:{value:200,left:null,right:null}},right:{value:1500,left:null,right:{value:10000,left:{value:2200,left:null,right:null},right:null}}}}}},
    expected: {
      inOrderArray: [1, 2, 5, 5, 10, 15, 22, 50, 200, 500, 1500, 2200, 10000],
      postOrderArray: [1, 2, 5, 5, 200, 50, 2200, 10000, 1500, 500, 22, 15, 10],
      preOrderArray: [10, 5, 2, 1, 5, 15, 22, 500, 50, 200, 1500, 10000, 2200]
    }
  },
  {
    input: {value:5000,left:{value:5,left:{value:2,left:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:{value:1,left:null,right:null}}}}},right:{value:3,left:null,right:null}},right:{value:15,left:{value:5,left:null,right:null},right:{value:22,left:null,right:{value:502,left:{value:204,left:{value:203,left:null,right:null},right:{value:205,left:null,right:{value:207,left:{value:206,left:null,right:null},right:{value:208,left:null,right:null}}}},right:null}}}},right:{value:55000,left:null,right:null}},
    expected: {
      inOrderArray: [1, 1, 1, 1, 1, 2, 3, 5, 5, 15, 22, 203, 204, 205, 206, 207, 208, 502, 5000, 55000],
      postOrderArray: [1, 1, 1, 1, 1, 3, 2, 5, 203, 206, 208, 207, 205, 204, 502, 22, 15, 5, 55000, 5000],
      preOrderArray: [5000, 5, 2, 1, 1, 1, 1, 1, 3, 15, 5, 22, 502, 204, 203, 205, 207, 206, 208, 55000]
    }
  },
];
