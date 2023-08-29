// Test: make test t=palindrome-check
function palindromeCheck(string: string): boolean {
  return solution1(string); // time O(n^2) | space O(n)
  // return mySolution1(string); // time O(n) | space O(n)
  // return mySolution2(string); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(n)
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

// Complexity (worst-case): time O(n^2) | space O(1)
// time (n^2) because string concatenation creates a new string 
function solution1(string: string): boolean {
  let reverseString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return string === reverseString;
}

export default palindromeCheck;
