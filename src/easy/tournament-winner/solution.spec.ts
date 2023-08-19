import { describe, expect, test } from '@jest/globals';
import solution from './solution';
import cases from './cases';

describe('tournament-winner', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {   
    const result = solution(input[0] as string[][], input[1] as number[]);   
    expect(result).toEqual(expected);   
  });
});
