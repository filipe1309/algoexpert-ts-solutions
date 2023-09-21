import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BTWP from 'common/BinaryTreeWithParent';
import mySolution1 from "./solution-0";
import solution1 from "./solution-1";
import solution2 from "./solution-2";

const solutions = {
  mySolution1, // time O(n) | space O(1)
  solution1,   // time O(n) | space O(n)
  solution2,   // time O(h) | space O(1)
};

// Test: make test t=find-successor
describe('find-successor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const binaryTreeWithParent = BTWP.toBTWP(input.tree.nodes);
    let node: BTWP | null = BTWP.findNodeInTree(binaryTreeWithParent, parseInt(input.node));
    const result: BTWP | null = solutions.mySolution1(binaryTreeWithParent, node as BTWP);
    expect(result ? result.value : null).toEqual(expected);
  });
});

