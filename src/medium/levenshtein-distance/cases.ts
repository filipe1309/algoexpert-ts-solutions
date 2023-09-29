export default [
  {
    input: {
      str1: "abc",
      str2: "yabd"
    },
    expected: 2
  },
  {
    input: {
      str1: "",
      str2: ""
    },
    expected: 0
  },
  {
    input: {
      str1: "",
      str2: "abc"
    },
    expected: 3
  },
  {
    input: {
      str1: "abc",
      str2: "abc"
    },
    expected: 0
  },
  {
    input: {
      str1: "abc",
      str2: "abx"
    },
    expected: 1
  },
  {
    input: {
      str1: "abc",
      str2: "abcx"
    },
    expected: 1
  },
  {
    input: {
      str1: "abc",
      str2: "yabcx"
    },
    expected: 2
  },
  {
    input: {
      str1: "algoexpert",
      str2: "algozexpert"
    },
    expected: 1
  },
  {
    input: {
      str1: "abcdefghij",
      str2: "1234567890"
    },
    expected: 10
  },
  {
    input: {
      str1: "abcdefghij",
      str2: "a234567890"
    },
    expected: 9
  },
  {
    input: {
      str1: "biting",
      str2: "mitten"
    },
    expected: 4
  },
  {
    input: {
      str1: "cereal",
      str2: "saturday"
    },
    expected: 6
  },
  {
    input: {
      str1: "cereal",
      str2: "saturdzz"
    },
    expected: 7
  },
  {
    input: {
      str1: "abbbbbbbbb",
      str2: "bbbbbbbbba"
    },
    expected: 2
  },
  {
    input: {
      str1: "xabc",
      str2: "abcx"
    },
    expected: 2
  },
  {
    input: {
      str1: "table",
      str2: "bal"
    },
    expected: 3
  },
  {
    input: {
      str1: "gumbo",
      str2: "gambol"
    },
    expected: 2
  },
];
