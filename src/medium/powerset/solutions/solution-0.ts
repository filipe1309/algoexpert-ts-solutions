// Permutations (Too complex) approach
// Complexity (worst-case): O(n^2*n!) time | O(n*n!) space
function powerset(array: number[]) {
  const resultSet = new Set<string>();
  powersetHelper(array, [], resultSet);
  const result = Array.from(resultSet)
    .map(v => v.split(',')
    .map(v => parseInt(v)));
  result.push([]);
  return result;
}

function powersetHelper(array: number[], currSet: number[], result: Set<string>) {
  if (currSet.length && !result.has(currSet.sort().toString())) result.add(currSet.sort().toString());
  if (!array.length) return;
  for (let i = 0; i < array.length; i++) {
    const newArray =  array.slice(0, i).concat(array.slice(i+1));
    const newSet = currSet.concat(array[i]);
    powersetHelper(newArray, newSet, result);
  }
}

export { powerset as solution0 };
