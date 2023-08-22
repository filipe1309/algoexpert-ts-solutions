// https://www.algoexpert.io/questions/class-photos

function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  return mySolution1(redShirtHeights, blueShirtHeights);
}

// Complexity (worst-case): time O(nlogn) | space O(1)
function mySolution1(redHeights: number[], blueHeights: number[]) {
  redHeights.sort((a, b) => a - b);
  blueHeights.sort((a, b) => a - b);
  const isRedInBack = redHeights[0] > blueHeights[0]
  return redHeights.every((num, idx) => {
    if (isRedInBack) return num > blueHeights[idx];
    return num < blueHeights[idx];
  });
}

export default classPhotos;
