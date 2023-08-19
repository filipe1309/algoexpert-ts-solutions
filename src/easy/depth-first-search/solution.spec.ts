import { describe, expect, test } from '@jest/globals';
import Node from './solution';
import cases from './cases';

// make test-one t=depth-first-search
describe('depth-first-search', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const node = new Node(input.name);
    node.initializeRecursive(input as Node);
    let result = node.depthFirstSearch([]);
    expect(result).toEqual(expected);
  });
});