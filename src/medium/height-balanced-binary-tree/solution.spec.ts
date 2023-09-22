import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BT from 'common/BinaryTree';
import mySolution1 from "./solution-0";
// import solution1 from "./solution-1";

const solutions = {
  mySolution1, // time O(n) | space O(1)
  //solution1, // time O(n) | space O(n)
  //solution2, // time O(h) | space O(1)
};

// Test: make test t=height-balanced-binary-tree
describe('height-balanced-binary-tree', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solutions.mySolution1(BT.toBT(input.tree.nodes));
    expect(result).toEqual(expected);
  });
});
