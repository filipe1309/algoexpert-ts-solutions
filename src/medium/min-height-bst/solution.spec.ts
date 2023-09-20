import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';
import { binaryTreeToFlatTreeObj } from '../../helpers';


describe('min-height-bst', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    const nodes = binaryTreeToFlatTreeObj(result);
    // Sort nodes by value for comparison
    nodes.sort((a, b) => a.value - b.value);
    // Sort tree by value for comparison
    expected.nodes.sort((a, b) => a.value - b.value);

    expect(nodes).toEqual(expected.nodes);
  });
});
