import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('three-number-sum', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.array, input.targetSum);
    expect(result).toEqual(expected);
  });
});
