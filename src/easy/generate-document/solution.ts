// Test: make test t=generate-document
function generateDocument(characters: string, document: string) {
  // return mySolution1(characters, document); // time O(m * n) | space O(1) 
  // return solution1(characters, document); // time O(m * (n + m)) | space O(1)
  return solution2(characters, document); // time 
}

// Complexity (worst-case): time O(m * n) | space O(1)
// m = document.length, n = characters.length
function mySolution1(characters: string, document: string) {
  for (let i = 0; i < characters.length; i++) {
    document = document.replace(characters[i], "");
  }
  return document === "";
}

// Complexity (worst-case): time O(m * (n + m)) | space O(1)
// m = document.length, n = characters.length
function solution1(characters: string, document: string) {
  for (let char of document) {
    let documentFrequency = countCharFrequency(char, document);
    let charactersFrequency = countCharFrequency(char, characters);
    if (documentFrequency > charactersFrequency) return false;
  }
  return true;
}

function countCharFrequency(targetChar: string, targetString: string): number {
  let frequency = 0;
  for (let char of targetString) {
    if (targetChar === char) frequency++;
  }
  return frequency;
}

// Complexity (worst-case): time O(c * (m + n)) | space O(c)
// m = document.length, n = characters.length, c = unique characters in document
function solution2(characters: string, document: string) {
  const alreadyCount = new Set<string>();
  for (let char of document) {
    if (alreadyCount.has(char)) continue;
    let documentFrequency = countCharFrequency(char, document);
    let charactersFrequency = countCharFrequency(char, characters);
    if (documentFrequency > charactersFrequency) return false;
    alreadyCount.add(char);
  }
  return true;
}

export default generateDocument;
