import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('move-element-to-end', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.array, input.toMove);
    expect(result.slice(result.indexOf(input.toMove)))
    .toEqual(expected.slice(expected.indexOf(input.toMove)));
    expect(result.sort()).toEqual(expected.sort());
  });
});
