import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n*m) time | O(n*m) space
} from "./solutions";

// Test: make test t=remove-islands
describe('remove-islands', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result).toEqual(expected);
  });
});
