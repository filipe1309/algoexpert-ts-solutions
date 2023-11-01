// Backtracking approach
// based on Powerset solution 1
// Complexity (worst-case): O(4^n * n) time | O(4^n * n) space
function phoneNumberMnemonics(phoneNumber: string) {
  let mnemonics: string[] = [""];
  const numMap = new Map<string, string[]>()
  numMap.set("1", ["1"]);
  numMap.set("2", ["a", "b", "c"]);
  numMap.set("3", ["d", "e", "f"]);
  numMap.set("4", ["g", "h", "i"]);
  numMap.set("5", ["j", "k", "l"]);
  numMap.set("6", ["m", "n", "o"]);
  numMap.set("7", ["p", "q", "r", "s"]);
  numMap.set("8", ["t", "u", "v"]);
  numMap.set("9", ["w", "x", "y", "z"]);
  numMap.set("0", ["0"]);

  for (const char of phoneNumber) {
    const length = mnemonics.length;
    for (let i = 0; i < length; i++) {
      numMap.get(char)?.forEach((v) => mnemonics.push(mnemonics[i] + v))
    }
    mnemonics = mnemonics.slice(length);
  }

  return mnemonics;
}

export { phoneNumberMnemonics as solution0 };
