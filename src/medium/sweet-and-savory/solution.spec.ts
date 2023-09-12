import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('sweet-and-savory', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.dishes, input.target);
    expect(result).toEqual(expected);
  });
});
