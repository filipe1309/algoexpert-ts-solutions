import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('product-sum', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input as SpecialArray);
    expect(result).toEqual(expected);
  });
});
