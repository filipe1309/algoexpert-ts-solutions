import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BT from 'common/BinaryTree';
import mySolution1 from "./solution-0";
import solution1 from "./solution-1";
import solution2 from "./solution-2";

const solutions = {
  mySolution1, // time O(n) | space O(h)
  solution1,   // time O(n) | space O(h)
  solution2,   // time O(n) | space O(h)
};

// Test: make test t=merge-binary-trees
describe('merge-binary-trees', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solutions.solution1(BT.toBT(input.tree1.nodes), BT.toBT(input.tree2.nodes));
    expect(result).toEqual(BT.toBT(expected.nodes));
  });
});
