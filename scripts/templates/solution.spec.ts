import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import mySolution1 from "./solution-0";
// import solution1 from "./solution-1";

const solutions = {
  mySolution1, // time O(??) | space O(??)
  //solution1, // time O(??) | space O(??)
  //solution2, // time O(??) | space O(??)
};

// Test: make test t=${NAME}
describe('${NAME}', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solutions.mySolution1(input);
    expect(result).toEqual(expected);
  });
});
