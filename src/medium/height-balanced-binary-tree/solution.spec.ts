import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BT from 'common/BinaryTree';
import mySolution1 from "./solution-0";
import solution1 from "./solution-1";

const solutions = {
  mySolution1, // time O(n) | space O(h)
  solution1,   // time O(n) | space O(h)
  //solution2, // time O(??) | space O(??)
};

// Test: make test t=height-balanced-binary-tree
describe('height-balanced-binary-tree', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solutions.solution1(BT.toBT(input.tree.nodes));
    expect(result).toEqual(expected);
  });
});
