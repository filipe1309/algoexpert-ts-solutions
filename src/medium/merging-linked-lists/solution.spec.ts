import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import { LinkedList } from 'common/LinkedList';
import {
  solution0, // O(n * m) time | O(1) space
  solution1, // O(n + m) time | O(1) space
  solution2, // O(n + m) time | O(n) space
} from "./solutions";

// Test: make test t=merging-linked-lists
describe('merging-linked-lists', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    let linkedListOne = LinkedList.fromFlatArray(input.linkedListOne.nodes);
    let linkedListTwo = LinkedList.fromFlatArray(input.linkedListTwo.nodes);
    const result = solution2(linkedListOne, linkedListTwo);
    let resultArray = result ? LinkedList.toFlatArray(result as LinkedList) : null;
    expect(resultArray).toEqual(expected ? expected.nodes : null);
  });
});
