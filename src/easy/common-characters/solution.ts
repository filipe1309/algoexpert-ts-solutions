// Test: make test t=common-characters
function commonCharacters(strings: string[]): string[] {
  // return mySolution1(strings); // time O(n*m) | space O(c)
  // return solution1(strings); // time O(n*m) | space O(c)
  return solution2(strings); // time O(n*m) | space O(m)
}

// Complexity (worst-case): time O(n*m) | space O(c)
// n = number of strings, m = length of longest string, 
// c = number of common characters
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

// Complexity (worst-case): time O(n*m) | space O(c)
// n = number of strings, m = length of longest string, 
// c = number of common characters
function solution1(strings: string[]): string[] {
  let charCount: {[key: string]: number} = {};
  for (let string of strings) {
    let uniqueChars = new Set(string)
    uniqueChars.forEach((char) => {
      if (!charCount[char]) charCount[char] = 0;
      charCount[char]++;
    });
  }

  let result = [];
  for (let char in charCount) {
    if (charCount[char] === strings.length) result.push(char);
  }
  return result;
}

// Complexity (worst-case): time O(n*m) | space O(m)
// n = number of strings, m = length of longest string
function solution2(strings: string[]): string[] {
  let smallestString = getSmallestString(strings);
  let potentialCommonChars = new Set(smallestString);
  for (let string of strings) {
    potentialCommonChars.forEach((char) => {
      const uniqueChars = new Set(string);
      if (!uniqueChars.has(char)) potentialCommonChars.delete(char);
    });
  }
  return Array.from(potentialCommonChars);
}

function getSmallestString(strings: string[]): string {
  let smallestString = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < smallestString.length) {
      smallestString = strings[i];
    }
  }
  return smallestString;
}

export default commonCharacters;
