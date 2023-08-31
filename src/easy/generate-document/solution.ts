// Test: make test t=generate-document
function generateDocument(characters: string, document: string) {
  return mySolution1(characters, document); // time O(n) | space O(n)
}

// Complexity (worst-case): time O(n) | space O(n)
function mySolution1(characters: string, document: string) {
  for (let i = 0; i < characters.length; i++) {
    document = document.replace(characters[i], "");
  }
  return document === "";
}

export default generateDocument;
