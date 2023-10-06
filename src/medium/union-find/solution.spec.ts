import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // createSet O(1) time | O(1) space, find O(n) time | O(1) space, union O(n) time | O(1) space
} from "./solutions";

// Test: make test t=union-find
describe('union-find', () => {
  test.each(cases)('%# (%j)', ({ expected }) => {
    const unionFind: solution0 = new solution0();
    expected.forEach(({ method, arguments: args, output }) => {
      const result = unionFind[method](...args);
      expect(result).toEqual(output);
    });
  });
});
