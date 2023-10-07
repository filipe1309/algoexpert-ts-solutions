// Cycle starting from 0 && Set -Inf in Array approach
// Complexity (worst-case): O(n) time | O(1) space
function singleCycleCheck(array: number[]): boolean {
  let i = 0;
  while (true) {
    const currNum = array[i];
    if (currNum === -Infinity) break;
    array[i] = -Infinity;
    i = i >= 0 ? (i + currNum) % array.length : array.length + i;
  }

  return (i === 0) && !array.some((v) => v !== -Infinity);
}

export { singleCycleCheck as solution0 };
