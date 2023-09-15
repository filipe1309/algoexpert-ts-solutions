import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('find-kth-largest-value-in-bst', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input.tree, input.k);
    expect(result).toEqual(expected);
  });
});
