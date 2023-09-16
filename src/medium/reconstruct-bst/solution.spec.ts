import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';
import { bstToTreeNodesArray } from '../../helpers';


describe('reconstruct-bst', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result: BST | null = solution(input);
    // convert bst to flat array of nodes for comparison
    const nodes = bstToTreeNodesArray(result as BST);

    // Sort nodes by value for comparison
    nodes.sort((a, b) => a.value - b.value);
    // Sort tree by value for comparison
    expected.nodes.sort((a, b) => a.value - b.value);

    expect(nodes).toEqual(expected.nodes);
  });
});
