import {describe, expect, test} from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('two number sum', () => {
  test.each(cases)('Test %#:', ({ array, targetSum, expected }) => {
    const result = solution(array, targetSum);
    //  compare independent of order
    expect(result.sort()).toEqual(expected.sort());
  });
});
