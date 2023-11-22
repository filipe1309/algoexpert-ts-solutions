// Insert At Current Begin approach
// Complexity (worst-case): O(n^2) time | O(1) space
function threeNumberSort(array: number[], order: number[]) {
  let begin = 0;
  for (let i = 0; i < order.length - 1; i++) {
    for (let j = begin; j < array.length; j++) {
      if (order[i] === array[j]) {
        swap(array, begin, j)
        begin++;
      }
    }
  }
  return array;
}

function swap(array: number[], i: number, j: number) {
  return [array[i], array[j]] = [array[j], array[i]];
}

export { threeNumberSort as solution0 };
