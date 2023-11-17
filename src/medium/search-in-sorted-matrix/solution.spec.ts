import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n * m) time | O(1) space
} from "./solutions";

// Test: make test t=search-in-sorted-matrix
describe('search-in-sorted-matrix', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.matrix, input.target);
    expect(result).toEqual(expected);
  });
});
