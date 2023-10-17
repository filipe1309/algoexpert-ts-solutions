// Sort && Map Positions approach
// Complexity (worst-case): O(n*logn) time | O(n) space
function taskAssignment(k: number, tasks: number[]) {
  // sort
  let tasksSorted = [...tasks].sort((a, b) => a - b);
  // convert to positions
  tasksSorted = tasksSorted.map((v) => { 
    const idx = tasks.indexOf(v); 
    tasks[idx] = -1; // mark as visited to avoid duplicates
    return idx
  })
  // create pairs of positions from sorted tasks
  let lastPair = 2 * k - 1;
  const result = [];
  for (let pair = 0; pair < k; pair++) {
    result.push([tasksSorted[pair], tasksSorted[lastPair--]]);
  }
  return result;
}

export { taskAssignment as solution0 };
