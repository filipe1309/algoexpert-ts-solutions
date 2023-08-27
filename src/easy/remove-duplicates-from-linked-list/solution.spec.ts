import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test t=remove-duplicates-from-linked-list
describe('remove-duplicates-from-linked-list', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input);  
    expect(result).toEqual(expected);  
  });
});
