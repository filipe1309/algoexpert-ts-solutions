import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import { LinkedList } from 'common/LinkedList';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=remove-kth-node-from-end
describe('remove-kth-node-from-end', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    let result = LinkedList.fromFlatArray(input.linkedList.nodes);
    solution0(result, input.k);
    let resultArray = LinkedList.toFlatArray(result as LinkedList);
    console.log({resultArray, expected: expected.nodes});
    expect(resultArray).toEqual(expected.nodes);
  });
});
