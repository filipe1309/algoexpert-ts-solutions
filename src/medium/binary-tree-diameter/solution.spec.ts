import { describe, expect, test } from '@jest/globals';
import mySolution1 from './solution-0';
import cases from './cases';

// Test: make test t=binary-tree-diameter
describe('binary-tree-diameter', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = mySolution1(input);
    expect(result).toEqual(expected);
  });
});
