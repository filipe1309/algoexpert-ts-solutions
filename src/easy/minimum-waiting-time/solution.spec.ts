import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test-one t=minimum-waiting-time
describe('minimum-waiting-time', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input);  
    expect(result).toEqual(expected);  
  });
});
