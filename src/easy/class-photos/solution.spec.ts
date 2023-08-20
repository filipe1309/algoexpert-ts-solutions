import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test-one t=class-photos
describe('class-photos', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input.redShirtHeights, input.blueShirtHeights);  
    expect(result).toEqual(expected);  
  });
});
