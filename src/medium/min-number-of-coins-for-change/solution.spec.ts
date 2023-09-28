import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // time O(??) | space O(??)
} from "./solutions";

// Test: make test t=min-number-of-coins-for-change
describe('min-number-of-coins-for-change', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.n, input.denoms);
    expect(result).toEqual(expected);
  });
});
