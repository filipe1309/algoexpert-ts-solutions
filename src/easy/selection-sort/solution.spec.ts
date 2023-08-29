import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('selection-sort', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    expect(result).toEqual(expected);
  });
});
