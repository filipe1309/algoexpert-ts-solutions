// Swap && SnapShot approach
// Complexity (worst-case): O(n*n!) time | O(n*n!) space
function permutations(array: number[]): number[][] | [] {
  let perms: number[][] = [];
  permutationHelper(0, array, perms);
  return perms;
}

function permutationHelper(idx: number, array: number[], perms: number[][]) {
  if (idx === array.length -1) { perms.push([...array]); return; }
  for (let j = idx; j < array.length; j++) {
    swap(idx, j, array);
    permutationHelper(idx + 1, array, perms);
    swap(idx, j, array);
  }
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]]
}

export { permutations as solution2 };
