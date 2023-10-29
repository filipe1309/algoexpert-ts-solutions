// Recursive Fix First && Add Second Variations && So On approach
// Complexity (worst-case): O(n^2*n!) time | O(n*n!) space
function permutations(array: number[]): number[][] | [] {
  let perms: number[][] = [];
  permutationHelper(array, [], perms);
  return perms;
}

function permutationHelper(array: number[], currPerm: number[], perms: number[][]) {
  if (!array.length && currPerm.length) { perms.push([...currPerm]); return; }
  for (let i = 0; i < array.length; i++) {
    const newArray = array.slice(0, i).concat(array.slice(i + 1));
    const newPerm = currPerm.concat(array[i]);
    permutationHelper(newArray, newPerm, perms);
  }
}

export { permutations as solution1 };
