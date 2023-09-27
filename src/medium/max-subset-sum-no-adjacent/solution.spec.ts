import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0,   // time O(n) | space O(n)
  solution1,   // time O(n) | space O(n)
  solution2,   // time O(n) | space O(1)
} from "./solutions";

// Test: make test t=max-subset-sum-no-adjacent
describe('max-subset-sum-no-adjacent', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution2(input);
    expect(result).toEqual(expected);
  });
});
