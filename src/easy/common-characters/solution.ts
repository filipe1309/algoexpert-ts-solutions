// Test: make test t=common-characters
function commonCharacters(strings: string[]): string[] {
  return mySolution1(strings); // time O(n) | space O(n)
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(strings: string[]): string[] {
  let hash: {[key: string]: boolean[]} = {};
  for (let i = 0; i < strings.length; i++) {
    for (let char of strings[i]) {
      if (!hash[char]) hash[char] = new Array(strings.length).fill(false)
      hash[char][i] = true;
    }
  }

  let result = [];
  for (let char in hash) {
    if (hash[char].reduce((prev, curr) => prev && curr)) result.push(char);
  }
  return result;
}

export default commonCharacters;
