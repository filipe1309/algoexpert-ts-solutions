export default [
  {
    input: [ "abc", "bcd", "cbaccd" ],
    expected: [ "b", "c" ]
  },
  {
    input: [ "a" ],
    expected: [ "a" ]
  },
  {
    input: [ "a", "b", "c" ],
    expected: []
  },
  {
    input: [ "aa", "aa" ],
    expected: [ "a" ]
  },
  {
    input: [ "aaaa", "a" ],
    expected: [ "a" ]
  },
  {
    input: [
      "abcde",
      "aa",
      "foobar",
      "foobaz",
      "and this is a string",
      "aaaaaaaa",
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea"
    ],
    expected: [ "a" ]
  },
  {
    input: [
      "abcdef",
      "fedcba",
      "abcefd",
      "aefbcd",
      "efadbc",
      "effffffffffffbcda",
      "eeeeeffffffbbbbbaaaaaccccdddd",
      "**************abdcef************"
    ],
    expected: [ "a", "b", "c", "d", "e", "f" ]
  },
  {
    input: [
      "ab&cdef!",
      "f!ed&cba",
      "a&bce!d",
      "ae&fb!cd",
      "efa&!dbc",
      "eff!&fff&fffffffbcda",
      "eeee!efff&fffbbbbbaaaaaccccdddd",
      "*******!***&****abdcef************",
      "*******!***&****a***********f*",
      "*******!***&****b***********c*"
    ],
    expected: [ "!", "&" ]
  },
  {
    input: [ "*abcd", "def*", "******d*****" ],
    expected: [ "*", "d" ]
  },
  {
    input: [ "*abc!d", "de!f*", "**!!!****d*****" ],
    expected: [ "!", "*", "d" ]
  }
];
