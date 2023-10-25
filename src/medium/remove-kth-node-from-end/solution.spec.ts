import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import { LinkedList } from 'common/LinkedList';
import {
  solution0, // O(n) time | O(1) space
  solution1, // O(n) time | O(1) space
} from "./solutions";

// Test: make test t=remove-kth-node-from-end
describe('remove-kth-node-from-end', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    let result = LinkedList.fromFlatArray(input.linkedList.nodes);
    solution1(result, input.k);
    let resultArray = LinkedList.toFlatArray(result as LinkedList);
    expect(resultArray).toEqual(expected.nodes);
  });
});
