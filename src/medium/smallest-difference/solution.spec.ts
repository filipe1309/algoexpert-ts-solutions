import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('smallest-difference', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.arrayOne, input.arrayTwo);
    expect(result).toEqual(expected);
  });
});
