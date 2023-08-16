import {describe, expect, test} from '@jest/globals';
import solution, { BST } from './solution';
import cases from './cases';

describe('find-closest-value-in-bst', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {  
    const result = solution(input.tree as BST, input.target);  
    expect(result).toEqual(expected);  
  });
});
