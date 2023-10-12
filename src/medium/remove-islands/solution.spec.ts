import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(w*h) time | O(w*h) space
  solution1, // O(w*h) time | O(w*h) space
} from "./solutions";

// Test: make test t=remove-islands
describe('remove-islands', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input);
    expect(result).toEqual(expected);
  });
});
