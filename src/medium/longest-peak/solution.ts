// Test: make test t=longest-peak
function longestPeak(array: number[]): number {
  // return mySolution1(array); // time O(n^2) | space O(1)
  return solution1(array); // time O(n) | space O(1)
}

// Complexity (worst-case): time O(n^2) | space O(1)
function mySolution1(array: number[]): number {
  let maxCount = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let count = 0;
    let isIncresing = false;
    let isDecreasing = false;
    while ((count + i) < array.length - 1 && array[count + i] < array[count + i + 1]) { 
      count++;
      isIncresing = true;
    }
    while (isIncresing && (count + i) < array.length - 1 && array[count + i] > array[count + i + 1]) { 
      count++;
      isDecreasing = true;
    }
    if ((count + 1) >= 3 && isIncresing && isDecreasing && count > maxCount) { 
      i += count - 1; 
      maxCount = count + 1; 
    }
  }
  return maxCount;
}

// Tip of a Peak approach
// 1 - Find tips
// 2 - Expand left and right
// 3 - Calculate length
// 4 - Update max length
// 5 - Repeat until end of the array
// Complexity (worst-case): time O(n) | space O(1)
function solution1(array: number[]): number {
  let longestPeakLength = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (isATipOfPeak(array, i)) {
      let leftIdx = i;
      let rightIdx = i;
      while (leftIdx >= 0 && array[leftIdx] > array[leftIdx - 1]) { leftIdx--; }
      while (rightIdx < array.length && array[rightIdx] > array[rightIdx + 1]) { rightIdx++; }
      let peakLength = rightIdx - leftIdx + 1;
      longestPeakLength = Math.max(longestPeakLength, peakLength);
      i = rightIdx
    }
  }

  return longestPeakLength;
}

function isATipOfPeak(array: number[], i: number): boolean {
  return array[i] > array[i - 1] && array[i] > array[i + 1];
}


export default longestPeak;
