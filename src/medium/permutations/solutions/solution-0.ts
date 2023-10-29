// Recursive Fix First && Add Second Variations && So On approach
// Complexity (worst-case): O(n^2*n!) time | O(n*n!) space
function permutations(array: number[]): number[][] | [] {
  let result: number[][] = [];
  for (let i = 0; i < array.length; i++) {
    permutationHelper([array[i]], array, result);
  }
  return result;
}

function permutationHelper(currArray: number[], array: number[], result: number[][]) {
  if (currArray.length === array.length) { result.push([...currArray]); return; }
  for (let i = 0; i < array.length; i++) {
    if (!currArray.includes(array[i])) {
      currArray.push(array[i])
      permutationHelper(currArray, array, result);
      currArray.pop() // remove last element to try next element
    }
  }
}



export { permutations as solution0 };
