// No so good approach
// Complexity (worst-case): O(??) time | O(??) space
function levenshteinDistance(str1: string, str2: string): number {
  if (str1 === str2) return 0;
  if (Math.min(str1.length, str2.length) === 0) return Math.max(str1.length, str2.length);

  let str1NoSUbsequentRepeats = str1;
  let str2NoSUbsequentRepeats = str2;
  // verify if str1 is a rotation of str2
  let opsRotation = 0;
  if (checkRotationStrings(str1, str2)) {
    opsRotation = str2.indexOf(str1[0]) - 1;
    str1NoSUbsequentRepeats = str1.replace(/(.)\1+/g, '$1')
    str2NoSUbsequentRepeats = str2.replace(/(.)\1+/g, '$1')
  }

  let str1Array = str1NoSUbsequentRepeats.split('')
  let str2Array = str2NoSUbsequentRepeats.split('')

  let ops = 0;
  let str1Char: string | undefined = '';
  let str2Char: string | undefined = '';
  while (str1Array.length) {
    str1Char = str1Array.shift();
    str2Char = str2Array.shift();

    while (str1Char && str1Char !== str2Char) {
      if (!str2Array.includes(str1Char)) str1Char = str1Array.shift();
      ops++;

      str2Char = str2Array.shift();
    }
  }
  const leftChars = str2Array.length + str1Array.length + (str1Char !== str2Char ? 1 : 0);
  const result = ops + leftChars;
  return opsRotation ? Math.min(opsRotation, result) : result;
}

function checkRotationStrings(string: string, rotated: string): boolean {
  return string.length === rotated.length && rotated.repeat(2).includes(string);
}

// levenshteinDistance("gumbo", "gambol") // 2
// s u/a, r l

// levenshteinDistance("table", "bal") // 3 // FAIL HERE
// r t, r e, s a/b em str1

// levenshteinDistance("xabc", "abcx") // 2
// r x, i x

// levenshteinDistance("abbbbbbbbb", "bbbbbbbbba") // 2
// s a/b, s b/a

// levenshteinDistance("biting", "mitten") // 4
// s b/m, s i/t, i e, r g

// levenshteinDistance("abc", "abcx") // 1
// r x

// levenshteinDistance("abc", "yabd") // 2
// i y, s c/d

// levenshteinDistance("cereal","saturday") // 6
// s c/s, s e/a, i t, i u, s e/d, i y

// levenshteinDistance("algoexpert", "algozexpert") // 1
// i z

export { levenshteinDistance as solution1 };
