import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('semordnilap', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    result.map(words => words.sort());
    expected.map(words => words.sort());
    expect(result).toEqual(expected);
  });
});
