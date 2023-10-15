const [WHITE, GREY, BLACK] = [0, 1, 2];

// DFS + Colors (W, G, B) approach
// Complexity (worst-case): O(v + e) time | O(v) space
function cycleInGraph(edges: number[][]): boolean {
  const colors =  Array(edges.length).fill(WHITE);
  for (let node = 0; node < edges.length; node++) {
    if (colors[node] !== WHITE) continue;
    const hasCycle = dfs(node, edges, colors);
    if (hasCycle) return true;
  }
  return false;
}

function dfs(node: number, edges: number[][], colors: number[]) {
  colors[node] = GREY;
  for (let i of edges[node]) {
    if (colors[i] === GREY) return true; 
    if (colors[i] === BLACK) continue;
      const hasCycle = dfs(i, edges, colors);
      if (hasCycle) return true;
  }
  colors[node] = BLACK;
  return false;
}

export { cycleInGraph as solution2 };
