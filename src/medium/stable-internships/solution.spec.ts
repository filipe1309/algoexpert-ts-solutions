import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2) time | O(n) space
  solution1, // O(n^2) time | O(n^2) space
} from "./solutions";

// Test: make test t=stable-internships
describe('stable-internships', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input.interns, input.teams);
    // sort the result and expected to make the comparison work
    result.sort().forEach(r => r.sort());
    expected.sort().forEach(e => e.sort());
    expect(result).toEqual(expected);
  });
});
