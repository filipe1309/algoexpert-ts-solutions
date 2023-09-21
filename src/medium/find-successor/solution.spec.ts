import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import mySolution1 from "./solution-0";
import BTWP from '../../common/BinaryTreeWithParent';
// import solution1 from "./solution-1";

// Test: make test t=find-successor
describe('find-successor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const binaryTreeWithParent = BTWP.flatTreeObjToBinaryTreeWithParent(input.tree.nodes);
    const result = mySolution1(binaryTreeWithParent, parseInt(input.node));
    expect(result).toEqual(expected);
  });
});
