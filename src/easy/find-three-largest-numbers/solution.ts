// Test: make test t=find-three-largest-numbers
function findThreeLargestNumbers(input: number[]): number[] {
  // return mySolution1(input); // time O(n) | space O(1)
  return solution1(input); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n) | space O(1)
function mySolution1(input: number[]): number[] {
  let result = [input[0], input[1], input[2]];

  for (let i = 3; i < input.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[i] > result[j]) {
        let tmp = input[i];
        input[i] = result[j];
        result[j] = tmp;
      }
    }
  }

  return result.sort((a, b) => a - b);
}

// Complexity (worst-case): time O(n) | space O(1)
function solution1(input: number[]): number[] {
  let threeLargest = [-Infinity, -Infinity, -Infinity];

  for (let num of input) {
    updateLargest(threeLargest, num);
  }

  return threeLargest;
}

function updateLargest(threeLargest: number[], num: number) {
  if (threeLargest[2] < num) shiftAndUpdate(threeLargest, num, 2)
  else if (threeLargest[1] < num) shiftAndUpdate(threeLargest, num, 1)
  else if (threeLargest[0] < num) shiftAndUpdate(threeLargest, num, 0)
}

function shiftAndUpdate(array: number[], num: number, idx: number) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) array[i] = num;
    else array[i] = array[i + 1];
  }
}

export default findThreeLargestNumbers;
