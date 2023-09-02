// Test: make test t=semordnilap
function semordnilap(words: string[]) {
  return mySolution1(words); // time O() | space O()
}

// Complexity (worst-case): time O() | space O()
function mySolution1(words: string[]) {
  let semordnilaps = [];
  for (let i = 0; i < words.length; i++) {
    let word1Reverse = words[i].split('').reverse().join('');
    for (let j = i + 1; j  < words.length; j++) {
      if (word1Reverse === words[j]) semordnilaps.push([words[i], words[j]])
    }
  }
  return semordnilaps
}

export default semordnilap;
