// Test: make test t=best-seat
function bestSeat(seats: number[]): number {
  return mySolution1(seats); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(seats: number[]): number {
  let bestSeat = -1;
  let bestRowSize = -1;
  for (let i = 1; i < seats.length - 1; i++) {
    let currRowSize = 0
    while (!seats[i + currRowSize]) {
      currRowSize++;
    }
    if (currRowSize && currRowSize > bestRowSize) {
      bestRowSize = currRowSize
      currRowSize--; // To fix even number beastSeat calc
      bestSeat = Math.floor(currRowSize/2) + i
      i += bestRowSize;
    }
  }
  return bestSeat;
}

export default bestSeat;
