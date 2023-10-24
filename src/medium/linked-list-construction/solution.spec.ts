import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import DllNode from 'common/DllNode';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=linked-list-construction
describe('linked-list-construction', () => {
  // TODO: fix tests with composite ids e.g. '1-2'
  test.each(cases)('%# (%j)', ({ expected }) => {
    const dll = new solution0();
    let result: boolean | null = null;
    expected.forEach(({ method, arguments: args, output, linkedList }) => {
      switch (method) {
        case 'setHead': dll.setHead(getFromDllOrCreate(args[0], dll)); break;
        case 'setTail': dll.setTail(getFromDllOrCreate(args[0], dll)); break;
        case 'insertBefore': dll.insertBefore(getFromDllOrCreate(args[0], dll), getFromDllOrCreate(args[1], dll)); break;
        case 'insertAfter': dll.insertAfter(getFromDllOrCreate(args[0], dll), getFromDllOrCreate(args[1], dll)); break;
        case 'insertAtPosition': dll.insertAtPosition(args[0] as number, new DllNode(parseInt(args[1] as string))); break;
        case 'removeNodesWithValue': dll.removeNodesWithValue(args[0] as number); break;
        case 'remove': dll.remove(getFromDllOrCreate(args[0], dll)); break;
        case 'containsNodeWithValue': result = dll.containsNodeWithValue(args[0] as number); break;
        default: break;
      }
      // const result = doublyLinkedList[method](...args);
      if (output && result) expect(result).toEqual(output);
      // convert doublyLinkedList to flat array of nodes for comparison
      const nodesResult = DllNode.toFlat(dll.head);
      // Sort nodes by value for comparison
      nodesResult.sort((a, b) => a.value - b.value);
      // Sort tree by value for comparison
      linkedList.nodes.sort((a, b) => a.value - b.value);
      // Remove id from linkedList.nodes for comparison
      const nodesExpected = [...linkedList.nodes.map(node => ({ value: node.value, prev: node.prev, next: node.next }))];
      console.log({ nodesResult, nodesExpected });
      expect(nodesResult).toEqual(nodesExpected);
    });
  });
});

function getFromDllOrCreate(id: string | number, dll: solution0) {
  if (typeof id === 'number') id = id.toString();
  let node = dll.head;
  while (node && node.value !== parseInt(id)) node = node.next;
  if (node) return node;
  return new DllNode(parseInt(id));
}
