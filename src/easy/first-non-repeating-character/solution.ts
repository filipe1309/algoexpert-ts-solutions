// Test: make test t=first-non-repeating-character
function firstNonRepeatingCharacter(string: string): number {
  // return mySolution1(string); // time O(n) | space O(1)
  // return mySolution2(string); // time O(n^2) | space O(1)
  return solution2(string); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(string: string): number {
  const charsMap = new Map<String, number>();
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!charsMap.has(char)) charsMap.set(char, i);
    else charsMap.set(char, -1);
  }

  for (let [key] of charsMap) {
    let charIndex = charsMap.get(key);
    // it works because Map keeps the order
    if (charIndex !== -1 && charIndex !== undefined) return charIndex;
  }

  return -1;
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution2(string: string): number {
  for (let i = 0; i < string.length; i++) {
    let hasMore = false;
    for (let j = 0; j < string.length; j++) {
      if (i !==j && string[i] === string[j]) {
        hasMore = true;
        break;
      }
    }
    if (!hasMore) return i;
  }

  return -1;
}

// Complexity (worst-case): time O(n) | space O(1)
function solution2(string: string): number {
  const charsFreqMap = new Map<String, number>();
  for (let char of string) {
    charsFreqMap.set(char, (charsFreqMap.get(char) ?? 0) + 1);
  }

  for (let charIdx = 0; charIdx < string.length; charIdx++) {
    if (charsFreqMap.get(string[charIdx]) === 1) return charIdx;
  }

  return -1;
}

export default firstNonRepeatingCharacter;
