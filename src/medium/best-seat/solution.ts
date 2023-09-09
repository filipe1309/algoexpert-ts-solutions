// Test: make test t=best-seat
function bestSeat(seats: number[]): number {
  // return mySolution1(seats); // time O(n) | space O(1)
  return solution1(seats); // time O(n) | space O(1)
}

// Row Size approach
// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(seats: number[]): number {
  let bestSeat = -1;
  let maxRowSize = -1;
  for (let i = 1; i < seats.length - 1; i++) {
    let currRowSize = 0
    while (!seats[i + currRowSize]) currRowSize++;
    if (currRowSize && currRowSize > maxRowSize) {
      maxRowSize = currRowSize;
      bestSeat = Math.floor((currRowSize-1)/2) + i;
      i += maxRowSize;
    }
  }
  return bestSeat;
}

// Left/Right approach
// Complexity (worst-case): time O(n) | space O(1)
function solution1(seats: number[]): number {
  let bestSeat = -1;
  let maxSpace = 0;
  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) right++;
    const currSpace = right - left - 1;
    if (currSpace > maxSpace) {
      maxSpace = currSpace;
      bestSeat = Math.floor((left + right)/2);
    }
    left = right;
  }
  return bestSeat;
}

export default bestSeat;
