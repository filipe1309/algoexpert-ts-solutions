import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2) time | O(1) space
} from "./solutions";

// Test: make test t=three-number-sort
describe('three-number-sort', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.array, input.order);
    expect(result).toEqual(expected);
  });
});
