import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';
import BT from '../../common/BinaryTree';

describe('invert-binary-tree', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    solution(input);
    const result = input;
    // convert bst to flat array of nodes for comparison
    const nodes = BT.binaryTreeToFlatTreeObj(result as BinaryTree);

    // Sort nodes by value for comparison
    nodes.sort((a, b) => a.value - b.value);
    // Sort tree by value for comparison
    expected.nodes.sort((a, b) => a.value - b.value);

    expect(nodes).toEqual(expected.nodes);
  });
});
