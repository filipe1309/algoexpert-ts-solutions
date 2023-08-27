import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test t=tandem-bicycle
describe('tandem-bicycle', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input.redShirtSpeeds, input.blueShirtSpeeds, input.fastest);  
    expect(result).toEqual(expected);  
  });
});
