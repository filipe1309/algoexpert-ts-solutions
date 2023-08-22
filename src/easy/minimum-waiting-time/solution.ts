// https://www.algoexpert.io/questions/minimum-waiting-time

function minimumWaitingTime(queries: number[]) {
  return solution1(queries);
}

// Complexity (worst-case): time O(n^2) | space O(n)
function mySolution1(queries: number[]) {
  queries.sort((a, b) => a - b);
  return queries.map(( _, idx) => {
    return queries.slice(0, idx).reduce((prev, curr) => prev + curr, 0);
  }).reduce((prev, curr) => prev + curr);
}

// Complexity (worst-case): time O(n*logn) | space O(1)
function solution1(queries: number[]) {
  queries.sort((a, b) => a - b);
  return queries.reduce((prev, curr, currIdx) => {
    let queriesLeft = queries.length - (currIdx + 1);
    return prev + curr*queriesLeft;
  }, 0);
}

export default minimumWaitingTime;
