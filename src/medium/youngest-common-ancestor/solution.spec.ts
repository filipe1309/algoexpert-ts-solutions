import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import AncestralTree from 'common/AncestralTree';
import {
  solution0, // O(n^2) time | O(n) space
  solution1, // O(n) time | O(n) space
  solution2, // O(d) time | O(1) space
} from "./solutions";

// Test: make test t=youngest-common-ancestor
describe('youngest-common-ancestor', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const resultObj: ResultAncestralTree = {
      topAncestor: input.topAncestor,
      descendantOne: input.descendantOne,
      descendantTwo: input.descendantTwo
    }
    AncestralTree.toAT(input.ancestralTree.nodes, resultObj);
    const result = solution2(
      resultObj.topAncestor as AncestralTree,
      resultObj.descendantOne as AncestralTree,
      resultObj.descendantTwo  as AncestralTree
    );
    expect(result.name).toEqual(expected.nodeId);
  });
});

