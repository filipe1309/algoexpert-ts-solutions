import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=min-heap-construction
describe('min-heap-construction', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const minHeap = new solution0(input.array);
    expected.forEach(({ method, arguments: args, output }) => {
      const result = minHeap[method](...args);
      expect(result).toEqual(output);
      expect(isMinHeapPropertySatisfied(minHeap.heap)).toBe(true)
    });
  });
});

const isMinHeapPropertySatisfied = (array: number[]) => {
  for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
    const parentIdx = Math.floor((currentIdx - 1) / 2);
    if (array[parentIdx] > array[currentIdx]) return false;
  }
  return true;
};
