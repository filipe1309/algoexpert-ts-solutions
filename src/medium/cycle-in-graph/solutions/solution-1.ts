// DFS + Stack approach
// Complexity (worst-case): O(v + e) time | O(v) space
// where v is the number of vertices and e is the number of edges
function cycleInGraph(edges: number[][]): boolean {
  const visited =  Array(edges.length).fill(false);
  const inStack =  Array(edges.length).fill(false);
  for (let node = 0; node < edges.length; node++) {
    if (visited[node]) continue;
    const hasCycle = dfs(node, edges, visited, inStack);
    if (hasCycle) return true;
  }
  return false;
}

function dfs(node: number, edges: number[][], visited: boolean[], inStack: boolean[]) {
  visited[node] = inStack[node] = true;
  for (let i of edges[node]) {
    if (!visited[i]) {
      const hasCycle = dfs(i, edges, visited, inStack);
      if (hasCycle) return true;
    } else if (inStack[i]) return true;
  }
  inStack[node] = false;
  return false;
}

export { cycleInGraph as solution1 };
