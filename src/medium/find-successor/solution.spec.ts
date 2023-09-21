import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BTWP from 'common/BinaryTreeWithParent';
// import mySolution1 from "./solution-0"; // time O(n) | space O(1)
import solution1 from "./solution-1"; // time O(n) | space O(n)

// Test: make test t=find-successor
describe('find-successor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const binaryTreeWithParent = BTWP.flatTreeObjToBinaryTreeWithParent(input.tree.nodes);
    const result = solution1(binaryTreeWithParent, parseInt(input.node));
    expect(result).toEqual(expected);
  });
});
