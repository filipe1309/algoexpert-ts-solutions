// Matrix approach
// Complexity (worst-case): O(n*m) time | O(n, m) space
//   n = str1.length
//   m = str2.length
function levenshteinDistance(str1: string, str2: string): number {
  const edits = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(0));

  for (let i = 0; i < str2.length + 1; i++) { edits[i][0] = i; }

  for (let j = 0; j < str1.length + 1; j++) { edits[0][j] = j; }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1]; //set the prev diagonal value
      } else {
        edits[i][j] = 1 + Math.min(
          edits[i][j - 1], // insert
          edits[i - 1][j], // remove
          edits[i - 1][j - 1] // replace
        );
      }
    }
  }

  return edits.at(-1)!.at(-1);
}

export { levenshteinDistance as solution2 };
