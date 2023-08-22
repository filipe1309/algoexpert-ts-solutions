// https://www.algoexpert.io/questions/sorted-squared-array

export default function sortedSquaredArray(array: number[]) {
  return mySolution1(array);
}

// O(n*logn) time, O(n) space
function mySolution1(array: number[]): number[] {
  return array.map(num => num*num).sort((a, b) => a - b);
}

// O(n) time, O(n) space
function solution(array: number[]): number[] {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

