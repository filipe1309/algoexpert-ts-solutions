// Iterative approach
// Complexity (worst-case): O(n*2^n) time | O(n*2^n) space
function powerset(array: number[]) {
  let subsets: number[][] = [[]];
  for (let elem of array) {
    const currSubSet = subsets.map((a) => a.slice());
    currSubSet.map(s => s.push(elem));
    subsets.push(...currSubSet);
  }
  return subsets;
}

export { powerset as solution1 };
