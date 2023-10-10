import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(wh) time | O(wh) space
} from "./solutions";

// Test: make test t=river-sizes
describe('river-sizes', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result.sort()).toEqual(expected.sort());
  });
});
