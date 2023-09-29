// Simple & Recursive But Very Slow For Big Strings approach
// Complexity (worst-case): O(??) time | O(??) space
function levenshteinDistance(str1: string, str2: string): number {
  return lev(str1, str2, str1.length, str2.length) + 1;
}

function lev(str1: string, str2: string, str1Idx: number, str2Idx: number): number {
  if (Math.min(str1Idx, str2Idx) < 0) return Math.max(str1Idx, str2Idx);
  const case1 = lev(str1, str2, str1Idx - 1, str2Idx) + 1;
  const case2 = lev(str1, str2, str1Idx, str2Idx - 1) + 1;
  const case3 = lev(str1, str2, str1Idx - 1, str2Idx - 1) + (str1.at(str1Idx) !== str2.at(str2Idx) ? 1 : 0);
  return Math.min(case1, case2, case3);
}

export { levenshteinDistance as solution0 };
