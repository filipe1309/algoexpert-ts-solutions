// Test: make test t=move-element-to-end
function moveElementToEnd(array: number[], toMove: number): number[] {
  // return mySolution1(array, toMove); // time O(n) | space O(1)
  return solution1(array, toMove); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(array: number[], toMove: number): number[] {
  let lastPos = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    while (array[i] === toMove && lastPos > i) {
        swap(array, i, lastPos);
        lastPos--;
    }
  }
  return array;
}

// Complexity (worst-case): time O(n) | space O(1)
function solution1(array: number[], toMove: number): number[] {
  let lastPos = array.length - 1;
  let i = 0;
  while (lastPos > i) {
      while (lastPos > i && array[lastPos] === toMove) lastPos--;
      if (array[i] === toMove) swap(array, i, lastPos);
      i++;
  }
  return array;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}

export default moveElementToEnd;
