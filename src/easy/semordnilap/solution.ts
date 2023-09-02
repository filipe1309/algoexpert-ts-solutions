// Test: make test t=semordnilap
function semordnilap(words: string[]) {
  // return mySolution1(words); // time O((n * m) ^ 2), | space O(n * m)
  return mySolution2(words); // time O(n * m), | space O(n * m)
}

// Complexity (worst-case): time O((n * m) ^ 2), | space O(n * m)
function mySolution1(words: string[]) {
  let semordnilaps = [];
  for (let i = 0; i < words.length; i++) {
    let word1Reverse = words[i].split('').reverse().join('');
    for (let j = i + 1; j  < words.length; j++) {
      if (word1Reverse === words[j]) semordnilaps.push([words[i], words[j]])
    }
  }
  return semordnilaps;
}

// Complexity (worst-case): time O(n * m), | space O(n * m)
function mySolution2(words: string[]) {
  let wordsSet = new Set(words);
  let semordnilaps = [];
  for (let i = 0; i < words.length; i++) {
    let word1Reverse = words[i].split('').reverse().join('');
      if (wordsSet.has(word1Reverse) && words[i] !== word1Reverse) {
        semordnilaps.push([words[i], word1Reverse]);
        wordsSet.delete(words[i]);
      }
  }
  return semordnilaps;
}

export default semordnilap;
