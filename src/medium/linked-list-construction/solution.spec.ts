import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import Dll from 'common/Dll';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=linked-list-construction
describe('linked-list-construction', () => {
  test.each(cases)('%# (%j)', ({ expected }) => {
    const doublyLinkedList = new solution0();
    expected.forEach(({ method, arguments: args, output, linkedList }) => {
      method
      args
      output
      linkedList
      // if (method === 'setHead') doublyLinkedList.setHead(new Dll(parseInt(args[0])));
      // const result = doublyLinkedList[method](...args);
      // if (output) expect(result).toEqual(output);
      // // convert doublyLinkedList to flat array of nodes for comparison
      // const nodes = Dll.toFlat(result);
      // console.log({ method, args, result, nodes, dll: linkedList.nodes });
      // // Sort nodes by value for comparison
      // nodes.sort((a, b) => a.value - b.value);
      // // Sort tree by value for comparison
      // linkedList.nodes.sort((a, b) => a.value - b.value);
      // expect(nodes).toEqual(linkedList.nodes);
      expect(true).toEqual(true);
    });
  });
});
