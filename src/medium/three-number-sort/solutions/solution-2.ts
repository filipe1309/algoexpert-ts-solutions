// Order First && Third approach
// Complexity (worst-case): O(n) time | O(1) space
function threeNumberSort(array: number[], order: number[]) {
  let firstValue = order[0];
  let thirdValue = order[2];

  let firstIdx = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === firstValue) {
      swap(array, firstIdx++, idx);
    }
  }

  let thirdIdx = array.length - 1;
  for (let idx = array.length; idx >= 0; idx--) {
    if (array[idx] === thirdValue) {
      swap(array, thirdIdx--, idx);
    }
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  return [array[i], array[j]] = [array[j], array[i]];
}

export { threeNumberSort as solution2 };
