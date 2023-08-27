import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test t=optimal-freelancing
describe('optimal-freelancing', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input);  
    expect(result).toEqual(expected);  
  });
});
