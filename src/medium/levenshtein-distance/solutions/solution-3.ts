// Matrix v2 approach
// Complexity (worst-case): O(n*m) time | O(min(n, m)) space
//   n = str1.length
//   m = str2.length
function levenshteinDistance(str1: string, str2: string): number {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits: number[] = [];
  const oddEdits: number[] = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) { evenEdits.push(j); }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min( previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }

  return big.length % 2 === 0 ? evenEdits.at(-1)! : oddEdits.at(-1)!;
}

export { levenshteinDistance as solution3 };
