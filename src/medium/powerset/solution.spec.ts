import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=powerset
describe('powerset', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    console.log(result.sort(), expected.sort())
    expect(result.sort()).toEqual(expected.sort());
  });
});
