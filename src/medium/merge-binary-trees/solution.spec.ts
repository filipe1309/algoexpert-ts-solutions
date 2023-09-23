import { describe, expect, test } from '@jest/globals';
import cases from './cases';
import mySolution1 from "./solution-0";
import BT from 'common/BinaryTree';
// import solution1 from "./solution-1";

const solutions = {
  mySolution1, // time O(??) | space O(??)
  //solution1, // time O(??) | space O(??)
  //solution2, // time O(??) | space O(??)
};

// Test: make test t=merge-binary-trees
describe('merge-binary-trees', () => {
  test.each(cases)('%# (%j)', ({ input, expected }) => {
    const result = solutions.mySolution1(BT.toBT(input.tree1.nodes), BT.toBT(input.tree2.nodes));
    // console.log(BT.toBT(input.tree1.nodes))
    // console.log(BT.toBT(input.tree2.nodes))
    // console.log(result);
    expect(result).toEqual(BT.toBT(expected.nodes));
  });
});
