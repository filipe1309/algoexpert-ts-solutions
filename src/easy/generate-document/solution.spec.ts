import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('generate-document', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.characters, input.document);
    expect(result).toEqual(expected);
  });
});
