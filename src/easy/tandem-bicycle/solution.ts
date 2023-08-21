// https://www.algoexpert.io/questions/tandem-bicycle
// Description: challenge.md

function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean,
) {
  return mySolution1(redShirtSpeeds, blueShirtSpeeds, fastest);
}

// Complexity (worst-case): time O(n*logn) | space O(1)
function mySolution1(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean,
) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  if (fastest) blueShirtSpeeds.reverse();

  return redShirtSpeeds.reduce((prev, curr, currIdx) => {
    return prev + Math.max(curr, blueShirtSpeeds[currIdx]);
  }, 0);
}

export default tandemBicycle;
