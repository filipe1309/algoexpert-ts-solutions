import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0, // O(??) time | O(??) space
} from "./solutions";

// Test: make test t=${NAME}
describe('${NAME}', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result).toEqual(expected);
  });
});
