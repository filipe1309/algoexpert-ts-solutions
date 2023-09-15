import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';
import { bstToTreeNodesArray } from '../../helpers';


describe('min-height-bst', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution(input);
    const nodes = bstToTreeNodesArray(result);
    // Sort nodes by value for comparison
    nodes.sort((a, b) => a.value - b.value);
    // Sort tree by value for comparison
    expected.nodes.sort((a, b) => a.value - b.value);

    console.log('result', result)
    console.log('nodes', nodes)
    console.log('expected.nodes', expected.nodes)
    expect(nodes).toEqual(expected.nodes);
  });
});
