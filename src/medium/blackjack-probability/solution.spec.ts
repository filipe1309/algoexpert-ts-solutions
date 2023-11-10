import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O((t - s) ^ 2) time | O(t - s) space
} from "./solutions";

// Test: make test t=blackjack-probability
describe('blackjack-probability', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.target, input.startingHand);
    expect(result).toEqual(expected);
  });
});
