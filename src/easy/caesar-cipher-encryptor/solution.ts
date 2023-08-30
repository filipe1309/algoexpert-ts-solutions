// Test: make test t=caesar-cipher-encryptor
function caesarCipherEncryptor(string: string, key: number): string {
  // return mySolution1(string, key); // time O(n) | space O(n)
  // return solution1(string, key); // time O(n) | space O(n)
  return solution2(string, key); // time O(n) | space O(n)
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(string: string, key: number): string {
  let result = [];
  const charCodeBegin = 97;
  const alphabetSize = 26;
  for (let i = 0; i < string.length; i++) {
    // (newCharCode - 97) % 26 + 97
    let newCharCode = (string[i].charCodeAt(0) + key);
    let newCharCodeAdjusted = (newCharCode - charCodeBegin) % alphabetSize + charCodeBegin
    result.push(String.fromCharCode(newCharCodeAdjusted));
  }
  return result.join('');
}

// Complexity (worst-case): time O(n) | space O(n)
function solution1(string: string, key: number): string {
  let newLetters = [];
  const newKey = key % 26;
  for (let i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter(string[i], newKey));
  }
  return newLetters.join('');
}

function getNewLetter(letter: string, key: number): string {
  let lastCharCodePos = 122;
  let newCharCode = letter.charCodeAt(0) + key;
  return newCharCode <= lastCharCodePos 
    ? String.fromCharCode(newCharCode)
    : String.fromCharCode(96 + newCharCode % lastCharCodePos);
}

// Complexity (worst-case): time O(n) | space O(n)
function solution2(string: string, key: number): string {
  let newLetters : string[] = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  for (let i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter2(string[i], newKey, alphabet));
  }
  return newLetters.join('');
}

function getNewLetter2(letter: string, key: number, alphabet: string[]): string {
  let newLetterIndex = alphabet.indexOf(letter) + key;
  return alphabet[newLetterIndex % 26];
}

export default caesarCipherEncryptor;
