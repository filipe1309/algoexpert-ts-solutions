// Bool Array + Stack approach
// Complexity (worst-case): O(v + e) time | O(v) space
function twoColorable(edges: number[][]): boolean {
  const colors = Array<boolean | undefined>(edges.length).fill(undefined);
  colors[0] = true;
  const stack = [0];

  while (stack.length > 0) {
    const node = stack.pop()!;
    for (let neighbor of edges[node]) {
      if (colors[neighbor] === undefined) {
        colors[neighbor] = !colors[node];
        stack.push(neighbor);
      }
      if (colors[neighbor] === colors[node]) return false;
    }
  }

  return true;
}

export { twoColorable as solution1 };
