// Test: make test t=longest-peak
function longestPeak(array: number[]): number {
  return mySolution1(array); // time O(n^2) | space O(1)
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

export default longestPeak;
