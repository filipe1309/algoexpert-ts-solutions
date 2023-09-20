import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import mySolution1 from "./solution-0";
// import solution1 from "./solution-1";
import { BinaryTreeWithParent, flatTreeObjToBinaryTreeWithParent } from '../../helpers';

// Test: make test t=find-successor
describe('find-successor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const binaryTreeWithParent = flatTreeObjToBinaryTreeWithParent(input.tree.nodes);
    console.log(binaryTreeWithParent);
    const result = mySolution1(binaryTreeWithParent, parseInt(input.node));
    expect(result).toEqual(expected);
    // expect(true).toEqual(true);
  });
});
