// Counter approach
// Complexity (worst-case): O(n) time | O(1) space
function singleCycleCheck(array: number[]): boolean {
  let currIdx = 0;
  let numElementsVisited = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currIdx === 0) return false;
    numElementsVisited++;
    currIdx = getNextIdx(currIdx, array);
  }

  return currIdx === 0;
}

function getNextIdx(currIdx: number, array: number[]): number {
  const jump = array[currIdx];
  const nextIdx = (currIdx + jump) % array.length;
  return (nextIdx >= 0) ? nextIdx : nextIdx + array.length;
}

export { singleCycleCheck as solution1 };
