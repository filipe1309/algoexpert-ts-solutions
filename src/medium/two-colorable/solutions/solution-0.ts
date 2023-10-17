const [COLOR_A, COLOR_B] = [1, 2];

// Map approach
// Complexity (worst-case): O(v + e) time | O(v) space
function twoColorable(edges: number[][]): boolean {
  const colorsMap = new Map<number, number>()
  for (let i = 0; i < edges.length; i++) {
    if (!colorsMap.has(i)) colorsMap.set(i, COLOR_A)
    let neighborsColor = colorsMap.get(i) === COLOR_A ? COLOR_B : COLOR_A;
    for (let neighbor of edges[i]) {
      if (!colorsMap.has(neighbor)) colorsMap.set(neighbor, neighborsColor);
      if (colorsMap.get(neighbor) !== neighborsColor) return false;
    }
  }
  return true;
}

export { twoColorable as solution0 };
