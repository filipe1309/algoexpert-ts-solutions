// Simple & Recursive v2 approach
// Complexity (worst-case): O(n*m) time | O(min(n, m)) space
//   n = str1.length
//   m = str2.length
function levenshteinDistance(str1: string, str2: string): number {
  return lev(str1, str2, str1.length - 1, str2.length - 1);
}

function lev(str1: string, str2: string, i: number, j: number): number {
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;

  if (str1[i] === str2[j]) return lev(str1, str2, i - 1, j - 1);

  return ( 1 + Math.min(
      lev(str1, str2, i, j - 1), // insert
      lev(str1, str2, i - 1, j), // remove
      lev(str1, str2, i - 1, j - 1) // replace
  ));
}

export { levenshteinDistance as solution0 };
