import {describe, expect, test} from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('sorted-squared-array', () => {
  test.each(cases)('Test %#', ({ array, expected }) => {
    const result = solution(array);
    expect(result).toEqual(expected);
  });
});
