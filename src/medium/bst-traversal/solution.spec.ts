import { describe, expect, test } from '@jest/globals';
import { preOrderTraverse, inOrderTraverse, postOrderTraverse } from './solution';
import cases from './cases';

describe('bst-traversal', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    expect(preOrderTraverse(input, [])).toEqual(expected.preOrderArray);
    expect(inOrderTraverse(input, [])).toEqual(expected.inOrderArray);
    expect(postOrderTraverse(input, [])).toEqual(expected.postOrderArray);
  });
});
