import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(n^2) time | O(1) space
} from "./solutions";

// Test: make test t=valid-starting-city
describe('valid-starting-city', () => {
  test.each(cases)('%# (%j)', ({ input: { distances, fuel, mpg }, expected }) => {
    const result = solution0(distances, fuel, mpg);
    expect(result).toEqual(expected);
  });
});
