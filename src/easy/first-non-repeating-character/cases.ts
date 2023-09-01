export default [
  {
    input: "abcdcaf",
    expected: 1
  },
  {
    input: "faadabcbbebdf",
    expected: 6
  },
  {
    input: "a",
    expected: 0
  },
  {
    input: "ab",
    expected: 0
  },
  {
    input: "abc",
    expected: 0
  },
  {
    input: "abac",
    expected: 1
  },
  {
    input: "ababac",
    expected: 5
  },
  {
    input: "ababacc",
    expected: -1
  },
  {
    input: "lmnopqldsafmnopqsa",
    expected: 7
  },
  {
    input: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy",
    expected: 25
  },
  {
    input: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    expected: -1
  },
  {
    input: "",
    expected: -1
  },
  {
    input: "ggyllaylacrhdzedddjsc",
    expected: 10
  },
  {
    input: "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh",
    expected: -1
  },
  {
    input: "aabbccddeeff",
    expected: -1
  }
];
