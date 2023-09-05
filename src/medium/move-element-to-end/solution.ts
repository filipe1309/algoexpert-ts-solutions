// Test: make test t=move-element-to-end
function moveElementToEnd(array: number[], toMove: number): number[] {
  return mySolution1(array, toMove); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(array: number[], toMove: number): number[] {
  let lastPos = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    while (array[i] === toMove && lastPos > i) {
        [array[i], array[lastPos]] = [array[lastPos], array[i]];
        lastPos--;
    }
  }
  return array;
}

export default moveElementToEnd;
