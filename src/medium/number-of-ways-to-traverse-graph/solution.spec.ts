import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(2^(n + m)) time | O(n + m) space
  solution1, // O(n * m) time | O(n * m) space
  solution2, // O(n + m) time | O(1) space
} from "./solutions";

// Test: make test t=number-of-ways-to-traverse-graph
describe('number-of-ways-to-traverse-graph', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution2(input.width, input.height);
    expect(result).toEqual(expected);
  });
});
