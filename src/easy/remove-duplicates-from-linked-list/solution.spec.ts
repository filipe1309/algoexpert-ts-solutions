import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test-one t=remove-duplicates-from-linked-list
describe('remove-duplicates-from-linked-list', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    solution(input);  
    expect(input).toEqual(expected);  
  });
});
