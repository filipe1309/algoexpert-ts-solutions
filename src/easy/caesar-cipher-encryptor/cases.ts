export default [
  {
    input: { string: "xyz", key: 2 },
    expected: "zab"
  },
  {
    input: { string: 'abc', key: 0 },
    expected: "abc"
  },
  {
    input: { string: 'abc', key: 3 },
    expected: "def"
  },
  {
    input: { string: 'xyz', key: 5 },
    expected: "cde"
  },
  {
    input: { string: 'abc', key: 26 },
    expected: "abc"
  },
  {
    input: { string: 'abc', key: 52 },
    expected: "abc"
  },
  {
    input: { string: 'abc', key: 57 },
    expected: "fgh"
  },
  {
    input: { string: 'xyz', key: 25 },
    expected: "wxy"
  },
  {
    input: { string: 'iwufqnkqkqoolxzzlzihqfm', key: 25 },
    expected: "hvtepmjpjpnnkwyykyhgpel"
  },
  {
    input: { string: 'ovmqkwtujqmfkao', key: 52 },
    expected: "ovmqkwtujqmfkao"
  },
  {
    input: { string: 'mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf', key: 7 },
    expected: "tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm"
  },
  {
    input: { string: 'kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh', key: 15 },
    expected: "zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw"
  }
];
