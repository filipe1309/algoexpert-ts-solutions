// Recursive Queue of Paths approach
// Complexity (worst-case): O(n^2) time | O(n) space
function cycleInGraph(edges: number[][]): boolean {
  const queue: number[] = []
  for (let vertice = 0; vertice < edges.length; vertice++) {
    if (verifyPaths(edges, queue, vertice)) return true
  }
  return false;
}

function verifyPaths(edges: number[][], queue: number[], row: number): boolean {
  queue.push(row)
  if (!edges[row]) return false;
  let result = false;
  for (let i = 0; i < edges[row].length; i++) {
    if (!edges[edges[row][i]]) continue;
    if (queue.includes(edges[row][i])) return true;
    queue.push(edges[row][i]);
    result = result || verifyPaths(edges, queue, edges[row][i]);
    queue.pop();
  }
  queue.pop();
  return result;
}

export { cycleInGraph as solution0 };
