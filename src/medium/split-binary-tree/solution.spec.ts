import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import BT from 'common/BinaryTree'
import {
  solution0,   // time O(n) | space O(h)
  solution1, // time O(??) | space O(??)
} from "./solutions";

// Test: make test t=split-binary-tree
describe('split-binary-tree', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution1(BT.toBT(input.tree.nodes));
    expect(result).toEqual(expected);
  });
});
