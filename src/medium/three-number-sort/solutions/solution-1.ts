// 3 Buckets approach
// Complexity (worst-case): O(n) time | O(1) space
function threeNumberSort(array: number[], order: number[]) {
  const valueCounts = [0, 0, 0];
  for (const element of array) {
    const orderIdx = order.indexOf(element)
    valueCounts[orderIdx]++;
  }
  
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    array[index++] = (i < valueCounts[0]) 
    ? order[0] : (i < valueCounts[0] + valueCounts[1]) 
    ? order[1] : order[2];
  }

  return array;
}

export { threeNumberSort as solution1 };
