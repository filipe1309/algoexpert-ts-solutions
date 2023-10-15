import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(v + e) time | O(v) space
  solution1, // O(v + e) time | O(v) space
} from "./solutions";

// Test: make test t=cycle-in-graph
describe('cycle-in-graph', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input);
    expect(result).toEqual(expected);
  });
});
