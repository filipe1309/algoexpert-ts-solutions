import { describe, expect, test } from '@jest/globals';
import BST from './solution';
import cases from './cases';
import BT from '../../common/BinaryTree';

describe('bst-construction', () => {
  test.each(cases)('%#', ({ input, expected }) => {
    const bst = new BST(input.rootValue);
    expected.forEach(({ method, arguments: args, output, tree }) => {
      const result = bst[method](...args);
      if (output) expect(result).toEqual(output);
      // convert bst to flat array of nodes for comparison
      const nodes = BT.binaryTreeToFlatTreeObj(bst);

      // Sort nodes by value for comparison
      nodes.sort((a, b) => a.value - b.value);
      // Sort tree by value for comparison
      tree.nodes.sort((a, b) => a.value - b.value);

      expect(nodes).toEqual(tree.nodes);
    });
  });
});
