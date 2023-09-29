import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(3^n) time | O(n) space
} from "./solutions";

// Test: make test t=levenshtein-distance
describe('levenshtein-distance', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.str1, input.str2);
    expect(result).toEqual(expected);
  });
});
