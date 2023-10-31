// Iterative approach
// Complexity (worst-case): O(n*2^n) time | O(n*2^n) space
function powerset(array: number[]) {
  let subsets: number[][] = [[]];
  for (let elem of array) {
    let length = subsets.length;
    for (let i = 0; i < length; i++) {
      subsets.push(subsets[i].concat(elem));
    }
  }
  return subsets;
}

export { powerset as solution1 };
