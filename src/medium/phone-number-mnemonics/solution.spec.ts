import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(4^n * n) time | O(4^n * n) space
  solution1, // O(4^n * n) time | O(4^n * n) space
} from "./solutions";

// Test: make test t=phone-number-mnemonics
describe('phone-number-mnemonics', () => {
  test.each(cases)('%#', ({ input, expected }) => {
    const result = solution1(input);
    expect(result.sort()).toEqual(expected.sort());
  });
});
