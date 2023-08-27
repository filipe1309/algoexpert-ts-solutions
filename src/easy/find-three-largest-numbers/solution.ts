// Test: make test t=find-three-largest-numbers
function findThreeLargestNumbers(input: number[]) {
  return mySolution1(input); // time O() | space O()
}

// Complexity (worst-case): time O() | space O()
function mySolution1(input: number[]) {
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

export default findThreeLargestNumbers;
