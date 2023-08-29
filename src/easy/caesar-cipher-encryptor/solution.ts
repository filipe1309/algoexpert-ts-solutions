// Test: make test t=caesar-cipher-encryptor
function caesarCipherEncryptor(string: string, key: number): string {
  return mySolution1(string, key); // time O(n) | space O(n)
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

export default caesarCipherEncryptor;
