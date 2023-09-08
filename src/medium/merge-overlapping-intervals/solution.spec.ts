import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('merge-overlapping-intervals', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    result.sort((a , b) => a[0] - b[0]);
    expect(result).toEqual(expected);
  });
});
