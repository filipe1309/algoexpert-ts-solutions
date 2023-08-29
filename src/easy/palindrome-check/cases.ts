export default [
  {
    input: "abcdcba",
    expected: true
  },
  {
    input: "a",
    expected: true
  },
  {
    input: "ab",
    expected: false
  },
  {
    input: "aba",
    expected: true
  },
  {
    input: "abb",
    expected: false
  },
  {
    input: "abba",
    expected: true
  },
  {
    input: "abcdefghhgfedcba",
    expected: true
  },
  {
    input: "abcdefghihgfedcba",
    expected: true
  },
  {
    input: "abcdefghihgfeddcba",
    expected: false
  },
];
