import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('valid-subsequence', () => {
  test.each(cases)('%# (%j)', ({ array, sequence, expected }) => {
    expect(solution(array, sequence)).toBe(expected);
  });
});


