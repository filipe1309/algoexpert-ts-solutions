import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(w * h) time | O(w * h) space
} from "./solutions";

// Test: make test t=reveal-minesweeper
describe('reveal-minesweeper', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input.board, input.row, input.column);
    expect(result).toEqual(expected);
  });
});
