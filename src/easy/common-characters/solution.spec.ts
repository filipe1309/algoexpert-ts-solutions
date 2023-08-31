import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('common-characters', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    //  compare independent of order
    expect(result.sort()).toEqual(expected.sort());
  });
});
