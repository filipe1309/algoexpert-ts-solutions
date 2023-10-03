import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(2^(W+H)) time | O(W+H) space
  solution1, // O(n * m) time | O(n * m) space
} from "./solutions";

// Test: make test t=number-of-ways-to-traverse-graph
describe('number-of-ways-to-traverse-graph', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(input.width, input.height);
    expect(result).toEqual(expected);
  });
});
