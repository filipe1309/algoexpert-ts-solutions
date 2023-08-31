import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('run-length-encoding', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    expect(result).toEqual(expected);
  });
});
