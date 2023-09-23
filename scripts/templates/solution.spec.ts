import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import {
  solution0,   // time O(??) | space O(??)
  //solution1, // time O(??) | space O(??)
} from "./solutions";

// Test: make test t=${NAME}
describe('${NAME}', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solution0(input);
    expect(result).toEqual(expected);
  });
});
