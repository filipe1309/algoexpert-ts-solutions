// Test: make test t=first-non-repeating-character
function firstNonRepeatingCharacter(string: string): number {
  return mySolution1(string); // time O() | space O()
}

// Complexity (worst-case): time O() | space O()
function mySolution1(string: string): number {
  const charsMap = new Map<String, number>();
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!charsMap.has(char)) charsMap.set(char, i);
    else charsMap.set(char, -1);
  }

  let minIndex = -1;
  for (let [key] of charsMap) {
    let charIndex = charsMap.get(key);
    if (charIndex !== undefined && charIndex >= 0) {
      if (minIndex === -1 || (charIndex < minIndex)) minIndex = charIndex;
    }
  }

  return minIndex;
}

mySolution1("a")

export default firstNonRepeatingCharacter;
