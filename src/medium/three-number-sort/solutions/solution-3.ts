// 3 pointers approach
// Complexity (worst-case): O(n) time | O(1) space
function threeNumberSort(array: number[], order: number[]) {
  let firstValue = order[0];
  let secondValue = order[1];

  // Keep track of the indices where the values are stored
  let firstIdx = 0;
  let secondIdx = 0;
  let thirdIdx = array.length - 1;

  while (secondIdx <= thirdIdx) {
    let value = array[secondIdx];
    if (value === firstValue) {
      swap(array, firstIdx++, secondIdx++);
    } else if (value === secondValue) {
      secondIdx++;
    } else {
      swap(array, secondIdx, thirdIdx--);
    }
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  return [array[i], array[j]] = [array[j], array[i]];
}

export { threeNumberSort as solution3 };
