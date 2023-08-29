// Test: make test t=palindrome-check
function palindromeCheck(string: string): boolean {
  // return mySolution1(string); // time O(n) | space O(1)
  return mySolution2(string); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(string: string): boolean {
  let reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution2(string: string): boolean {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }

  return true;
}

export default palindromeCheck;
