import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2*n!) time | O(n*n!) space
} from "./solutions";

// Test: make test t=powerset
describe('powerset', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result.sort()).toEqual(expected.sort());
  });
});
