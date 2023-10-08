import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import { toNode } from 'common/TreeArray';
import {
  solution0, // O(v + e) time | O(v) space
} from "./solutions";

// Test: make test t=breadth-first-search
describe('breadth-first-search', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const tree = toNode(input.graph.nodes, solution0);
    expect(tree.breadthFirstSearch([])).toEqual(expected);
  });
});
