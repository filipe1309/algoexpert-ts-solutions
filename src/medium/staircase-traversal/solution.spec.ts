import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^k) time | O(n) space
} from "./solutions";

// Test: make test t=staircase-traversal
describe('staircase-traversal', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.height, input.maxSteps);
    expect(result).toEqual(expected);
  });
});
