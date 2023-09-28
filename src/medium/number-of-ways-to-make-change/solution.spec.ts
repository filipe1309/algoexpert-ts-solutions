import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0,   // time O(n^2) | space O(n)
  solution1,   // time O(n*d) | space O(n)
} from "./solutions";

// Test: make test t=number-of-ways-to-make-change
describe('number-of-ways-to-make-change', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input.n, input.denoms);
    expect(result).toEqual(expected);
  });
});
