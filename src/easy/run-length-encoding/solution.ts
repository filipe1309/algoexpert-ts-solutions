// Test: make test t=run-length-encoding
function runLengthEncoding(string: string): string {
  return mySolution1(string); // time O() | space O()
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(string: string): string {
  let result = [];
  let count = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1] && (count % 9 !== 0)) {
      count++;
      continue;
    }
    result.push(`${count}${string[i - 1]}`);
    count = 1;
  }
  result.push(`${count}${string[string.length - 1]}`);
  return result.join('');
}


export default runLengthEncoding;
