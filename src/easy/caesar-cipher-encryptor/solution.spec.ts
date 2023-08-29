import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('caesar-cipher-encryptor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.string, input.key);
    expect(result).toEqual(expected);
  });
});
