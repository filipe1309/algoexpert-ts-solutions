// Recursive Union With The Last approach
// Explanation: 
//  - The powerset of an empty set is a set containing the empty set.
//  - The powerset of a set containing one element is a set containing the empty 
// set and the set itself.
//  - The powerset of a set containing more than one element is the union of the
// powerset of the set without its last element and the set itself.
// Complexity (worst-case): O(??) time | O(??) space
function powerset(array: number[], idx: number | null = null): number[][] {
  if (idx === null) idx = array.length - 1;
  if (idx < 0) return [[]];

  const elem = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    subsets.push(subsets[i].concat(elem));
  }
  return subsets;
}

export { powerset as solution2 };
