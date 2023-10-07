import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n) time | O(1) space
  solution1, // O(n) time | O(1) space
} from "./solutions";

// Test: make test t=single-cycle-check
describe('single-cycle-check', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input);
    expect(result).toEqual(expected);
  });
});
