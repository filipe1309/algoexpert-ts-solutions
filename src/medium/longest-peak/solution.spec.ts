import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('longest-peak', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    expect(result).toEqual(expected);
  });
});
