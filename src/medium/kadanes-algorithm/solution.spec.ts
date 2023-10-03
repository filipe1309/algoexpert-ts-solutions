import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2) time | O(1) space
  solution1, // O( n ) time | O(n) space
  solution2, // O( n ) time | O(1) space
} from "./solutions";

// Test: make test t=kadanes-algorithm
describe('kadanes-algorithm', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution2(input);
    expect(result).toEqual(expected);
  });
});
