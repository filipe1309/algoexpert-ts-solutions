import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2) time | O(n) space
} from "./solutions";

// Test: make test t=cycle-in-graph
describe('cycle-in-graph', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result).toEqual(expected);
  });
});
