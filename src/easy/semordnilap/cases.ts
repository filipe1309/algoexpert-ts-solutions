export default [
  {
    input: [ "diaper", "abc", "test", "cba", "repaid" ],
    expected: [[ "diaper", "repaid" ], [ "abc", "cba" ]]
  },
  {
    input: [],
    expected: []
  },
  {
    input: [ "aaa", "bbbb" ],
    expected: []
  },
  {
    input: [ "dog", "god" ],
    expected: [[ "dog", "god" ]]
  },
  {
    input: [ "dog", "hello", "god" ],
    expected: [[ "dog", "god" ]]
  },
  {
    input: [ "dog", "desserts", "god", "stressed" ],
    expected: [[ "dog", "god"], ["desserts", "stressed" ]]
  },
  {
    input: [ "dog", "hello", "desserts", "test", "god", "stressed" ],
    expected: [[ "dog", "god"], ["desserts", "stressed" ]]
  },
  {
    input: [ "abcde", "edcba", "edbc", "edb", "cbde", "abc" ],
    expected: [[ "abcde", "edcba"], ["cbde", "edbc" ]]
  },
  {
    input: [ "abcde", "bcd", "dcb", "edcba", "aaa" ],
    expected: [[ "abcde", "edcba"], ["bcd", "dcb" ]]
  },
  {
    input: [ "abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba" ],
    expected: [[ "abcdefghijk", "kjihgfedcba" ]]
  },
  {
    input: [
      "liver",       "dog",
      "hello",       "desserts",
      "evil",        "test",
      "god",         "stressed",
      "racecar",     "palindromes",
      "semordnilap", "abcd",
      "live"
    ],
    expected: [
      ["dog", "god"],
      ["desserts", "stressed"],
      ["evil", "live"],
      ["palindromes", "semordnilap"]
    ]
  }

];
