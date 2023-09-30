import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n*m) time | O(min(n, m)) space
  solution2, // O(n*m) time | O(n, m) space
  solution3, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=levenshtein-distance
describe('levenshtein-distance', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution3(input.str1, input.str2);
    expect(result).toEqual(expected);
  });
});
