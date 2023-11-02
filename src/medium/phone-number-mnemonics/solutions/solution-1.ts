// Recursive One Digit at a Time approach
// Complexity (worst-case): O(4^n * n) time | O(4^n * n) space
// where n = number of digits in the phone number
function phoneNumberMnemonics(phoneNumber: string) {
  const currMn = Array(phoneNumber.length).fill('');
  const result: string[] = [];
  phoneNumberMnemonicsHelper(0, phoneNumber, currMn, result);
  return result;
}

function phoneNumberMnemonicsHelper(
  idx: number,
  pn: string,
  currMn: string[],
  result: string[]
) {
  // Base case
  if (idx === pn.length) { result.push(currMn.join('')); return; }

  // Recursive case
  const currDigit = pn[idx];
  const currMap = DIGIT_LETTERS[currDigit];
  // For each letter in the current digit's map
  for (let char of DIGIT_LETTERS[currDigit]) {
    currMn[idx] = char;
    phoneNumberMnemonicsHelper(idx + 1, pn, currMn, result);
  }
}

const DIGIT_LETTERS: { [digit: string]: string[] } = {
  "0": ["0"],
  "1": ["1"],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
}

export { phoneNumberMnemonics as solution1 };
