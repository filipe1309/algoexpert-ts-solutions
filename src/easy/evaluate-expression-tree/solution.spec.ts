import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

// make test t=evaluate-expression-tree
describe('evaluate-expression-tree', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input);  
    expect(result).toEqual(expected);  
  });
});
