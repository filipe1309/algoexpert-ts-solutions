import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('binary-search', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.array, input.target);
    expect(result).toEqual(expected);
  });
});
