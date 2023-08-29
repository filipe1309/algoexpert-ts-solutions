// Test: make test t=palindrome-check
function palindromeCheck(string: string): boolean {
  return mySolution1(string); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(string: string): boolean {
  let reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

export default palindromeCheck;
