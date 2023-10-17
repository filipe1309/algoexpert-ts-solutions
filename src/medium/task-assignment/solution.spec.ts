import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n*logn) time | O(n) space
} from "./solutions";

// Test: make test t=task-assignment
describe('task-assignment', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    let result = solution0(input.k, input.tasks);
    console.log({ result, expected });
    // sort expected
    expected.map((answer) => answer.sort());
    expected.sort();
    // sort result
    result.map((pair) => pair.sort());
    result.sort();
    // There are multiple possible answers
    // adjust cases.ts to reflect this if needed
    expect(result).toEqual(expected);
  });
});
