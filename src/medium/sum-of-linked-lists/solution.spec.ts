import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import { LinkedList } from 'common/LinkedList';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=sum-of-linked-lists
describe('sum-of-linked-lists', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    let linkedListOne = LinkedList.fromFlatArray(input.linkedListOne.nodes);
    let linkedListTwo = LinkedList.fromFlatArray(input.linkedListTwo.nodes);
    const result = solution0(linkedListOne, linkedListTwo);
    let resultArray = LinkedList.toFlatArray(result as LinkedList);
    console.log({result, resultArray, expected: expected.nodes})
    expect(resultArray).toEqual(expected.nodes);
  });
});
